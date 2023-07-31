import {} from '/js/common/index.js';
import {getNode, bindEvent, insertLast, attr} from '/lib/dom/index.js';
import {isString, saveStorage, tiger} from '../lib/utils/index.js';

// localStorage.setItem('uniqueId','640b0d0d44')

// # DOM 가져오기
const cartList = getNode('.cartList');
const refrigerCart = getNode('.refrigerCart');
const frozenCart = getNode('.frozenCart');
const ambientCart = getNode('.ambientCart');

// # 데이터 베이스
const DATA_USERS = 'http://localhost:3000/users';
const DATA_PRODUCTS = 'http://localhost:3000/products';

const reponseUsers = await tiger.get(DATA_USERS);
const dbUserData = reponseUsers.data; // 전체 유저 data
const responseProducts = await tiger.get(DATA_PRODUCTS);
const dbProductData = responseProducts.data; // 전체 상품 data

// # 로컬 스토리지
const {localStorage: storage} = globalThis;
const localUniqueId = await getStorage('uniqueId'); // 로컬에 있는 유니크 ID
const localCartList = await getStorage('cart');
const localCartItems = JSON.parse(localCartList); // 로컬의 cart 리스트 : '아이템ID : 수량'(객체)

// # 로그인 유저 데이터
// 로그인유저의 데이터베이스 정보 (객체)
const loginUserData = dbUserData.find((item) => {
	if (!localUniqueId) return;
	localUniqueId === item.uniqueId;
	return localUniqueId;
});

// # 로컬 카트 정보
const getLocalCartList = (() => {
	if (!localCartList) return;
	const userCartItemIds = Object.keys(JSON.parse(localCartList)); // 로그인 유저의 카트 아이템ID (배열)
	const userCartItemData = dbProductData.filter((item) => userCartItemIds.includes(item.id)); // 카트에 담긴 아이템의 객체 정보(배열)
	return userCartItemData;
})();

// # 장바구니에 담긴 상품 랜더링 하기
const renderCartList = (() => {
	if (!getLocalCartList) return;
	getLocalCartList.forEach((item) => {
		let {
			id,
			type,
			name,
			price,
			salePrice,
			stock,
			image: {thumbnail},
		} = item;

		const firstCount = localCartItems[item.id];
		price = changePriceLocale(price);
		salePrice = changePriceLocale(salePrice);

		// 할인 유무에 따라 다른 상픔 템플릿 반환
		const cartTemplate = (() => {
			let template;
			if (salePrice === '0') {
				template = /* html */ `
          <ul>
            <li class="flex h-[115px] justify-between border-b-2 border-gray/100">
              <dl class="cartItemList">
                <dt class="cartItemName">${name}</dt>
                <dd class="cartItemImageWrapper"><img src="/assets/images/product/${thumbnail}" alt="${name}" class="cartItemImage h-[79px] w-16" /></dd>
                <dt class="sr-only">삭제할 아이템 선택</dt>
                <dd class="cartCheck flex items-center">
                  <div class="cartCheckAll">
                    <input type="checkbox" class="cartChecAllkbox" id="${name}Cart" name="${name}Cart" />
                    <label for="${name}Cart" class="cartCheckBoxlable"> <span class="checkIcon"></span></label>
                  </div>
                </dd>
                <dt class="sr-only">상품 수량</dt>
                <dd class="cartItemCount rounded-sm border border-gray/100">
                  <button type="button" aria-label="수량 내리기" class="cartCountDown w-[25px] text-center">–</button>
                  <label for="cartItemCountInput" class="sr-only">상품 수량을 좌우 버튼을 통해 조정해주세요</label>
                  <input type="number" id="cartItemCountInput" name="cartItemCountInput" value="${firstCount}" readonly class="w-[25px] text-center" data-id="${id}"/>
                  <button type="button" aria-label="수량 올리기" class="cartCountUp w-[25px] leading-[25px]">+</button>
                </dd>
                <dt class="sr-only">할인가격</dt>
                <dd class="cartItemDiscount font-semibold">${price}원</dd>
              </dl>
              <button type="button" class="ml-2"><img src="/assets/images/cart/ic-cancel.svg" alt="상품삭제" /></button>
            </li>
          </ul>
        `;
			} else {
				template = /* html */ `
          <ul>
            <li class="flex h-[115px] justify-between border-b-2 border-gray/100">
              <dl class="cartItemList">
                <dt class="cartItemName">${name}</dt>
                <dd class="cartItemImageWrapper"><img src="/assets/images/product/${thumbnail}" alt="${name}" class="cartItemImage h-[79px] w-16" /></dd>
                <dt class="sr-only">삭제할 아이템 선택</dt>
                <dd class="cartCheck flex items-center">
                  <div class="cartCheckAll">
                    <input type="checkbox" class="cartChecAllkbox" id="${name}Cart" name="${name}Cart" />
                    <label for="${name}Cart" class="cartCheckBoxlable"> <span class="checkIcon"></span></label>
                  </div>
                </dd>
                <dt class="sr-only">상품 수량</dt>
                <dd class="cartItemCount rounded-sm border border-gray/100">
                  <button type="button" aria-label="수량 내리기" class="cartCountDown w-[25px] text-center">–</button>
                  <label for="cartItemCountInput" class="sr-only">상품 수량을 좌우 버튼을 통해 조정해주세요</label>
                  <input type="number" id="cartItemCountInput" name="cartItemCountInput" value="${firstCount}" readonly class="w-[25px] text-center" data-id=${id} />
                  <button type="button" aria-label="수량 올리기" class="cartCountUp w-[25px] leading-[25px]">+</button>
                </dd>
                <dt class="sr-only">가격</dt>
                <dd class="cartItemPrice text-sm text-gray/300 line-through">${price}원</dd>
                <dt class="sr-only">할인가격</dt>
                <dd class="cartItemDiscount font-semibold">${salePrice}원</dd>
              </dl>
              <button type="button" class="ml-2"><img src="/assets/images/cart/ic-cancel.svg" alt="상품삭제" /></button>
            </li>
          </ul>
        `;
			}
			return template;
		})();

		insertLast(checkCartProductType(type), cartTemplate);
	});
})();

// # 배송지 정보 랜더링 하기
const renderCartAddress = (() => {
	const cartlocation = getNode('.cartLocation');
	const shipTitle = getNode('.shipTitle');
	const shipping = getNode('.shipping');
	const shipchange = getNode('.shipchange');
	const userAdderss = (() => {
		if (!loginUserData) return;
		return loginUserData.address;
	})();
	if (localUniqueId && userAdderss) {
		cartlocation.innerText = userAdderss;
	} else {
		cartlocation.innerText = '배송 정보가 없습니다.';
		shipTitle.remove();
		shipping.remove();
		shipchange.innerText = '배송지 입력';
	}
})();

// # 로컬스토리지에서 값 가져오기
function getStorage(key) {
	return new Promise((resolve, reject) => {
		if (isString(key)) {
			resolve(storage.getItem(key));
		} else {
			reject({message: 'key는 문자 타입 이어야 합니다.'});
		}
	});
}

// # 상품의 type 체크하여 해당 카테고리 node 반환
function checkCartProductType(type) {
	switch (type) {
		case 'ambient':
			return ambientCart;
			break;
		case 'frozen':
			return frozenCart;
			break;
		case 'refriger':
			return refrigerCart;
			break;
	}
}

// # 천단위 콤마 찍기
function changePriceLocale(num) {
	const locale = navigator.language;
	num = num.toLocaleString(locale);
	return num;
}

// @ 결제 예정 가격 도출하기
// # 특정 class name이 포함되어 있는지 찾기
const hasClassName = (node, name) => node.classList.contains(name);

// # 카운터 증감
function handleCount(node, value, input) {
	let firstValue = +value;

	if (hasClassName(node, 'cartCountUp')) {
		firstValue++;
	} else if (hasClassName(node, 'cartCountDown') && firstValue > 0) {
		firstValue--;
	}
	input.value = firstValue;
	return firstValue;
}

function handleCartCount(e) {
	let target = e.target;

	const findButton = (target) => target.closest('button');
	if (!findButton(target)) return;
	const findParent = findButton(target).parentNode;
	const findInput = findParent?.childNodes[5];
	const findInputValue = findInput?.value;
	if (!findInputValue) return;

	const productId = attr(findInput, 'data-id');
	if (!productId) return;

	const resultCount = handleCount(findButton(target), findInputValue, findInput);
	const copyList = {...localCartItems};
	copyList[productId] = resultCount;
	saveStorage('cart', copyList);

	// # 리스트 상품 가격 변화
	const findGrand = findParent.parentNode;
	const findListPrice = findGrand.children[7];
	const listPrice = findListPrice.innerText;
	let firstPrice = listPrice;
	changeListPrice(firstPrice);
}

const changeListPrice = (first) => {
	let previousPrice = first.slice(0, -1);
	console.dir(previousPrice);
};

bindEvent(cartList, 'click', handleCartCount);
