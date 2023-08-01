import {} from '/js/common/index.js';
import {getNode, bindEvent, insertLast, attr} from '/lib/dom/index.js';
import {isString, saveStorage, tiger} from '../lib/utils/index.js';

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

// # 로그인유저의 데이터베이스 정보 (객체)
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

		// 상품별 '가격 * 수량' 계산하기
		const firstCount = localCartItems[item.id];
		const nomalCost = +price * firstCount;
		const saleCost = +salePrice * firstCount;

		// 가격에 콤마 찍기
		const textNomalPrice = changePriceLocale(nomalCost);
		const textSalePrice = changePriceLocale(saleCost);

		// # 할인 유무에 따라 다른 상픔 템플릿 반환
		const cartTemplate = (() => {
			let template;
			if (textSalePrice === '0') {
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
                <dd class="cartItemDiscount cartPlusPrice font-semibold">${textNomalPrice}원</dd>
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
                <dd class="cartItemPrice cartPlusPrice bigPrice text-sm text-gray/300 line-through">${textNomalPrice}원</dd>
                <dt class="sr-only">할인가격</dt>
                <dd class="cartItemDiscount cartMinusPrice smallPrice font-semibold">${textSalePrice}원</dd>
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

// # 카운터 input 증감 후 반환
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

// # 콤마 포함된 문자열 숫자 변환
const strToNum = (str) => parseInt(str.replace(/,/g, ''));

// # 표시된 가격 가져오기
function getListPrice(node) {
	// 리스트의 정상가 가져오기
	// 모든 텍스트값 가져오기
	function convertPriceToNumber(htmlPrice) {
		const cleanedPrice = htmlPrice.replace(/[-원,]/g, '');
		return parseInt(cleanedPrice, 10);
	}
	// 숫자값의 배열로 바꾸기
	const prices = Array.from(node).map((element) => convertPriceToNumber(element.innerHTML));
	// 배열의 가격 모두 더하기
	const sumPrices = prices.reduce((acc, current) => acc + current, 0);
	return sumPrices;
}

// @ 최종 가격 랜더링 하기
function renderCartPrice() {
	// # 정상가 총합 구하기
	const cartPlusList = document.querySelectorAll('.cartPlusPrice');
	const sumPrices = getListPrice(cartPlusList);

	// 정상가 랜더링
	const cartNomalPrice = document.querySelector('.cartNomalPrice');
	cartNomalPrice.innerText = `${changePriceLocale(sumPrices)}원`;

	// # 할인가 총합 구하기
	const cartMinusList = document.querySelectorAll('.cartMinusPrice');
	const minusPrices = getListPrice(cartMinusList);

	// # 차액 구하기
	// 큰값, 작은값 있는 경우만 가져오기
	const bigPrice = document.querySelectorAll('.bigPrice');
	const smallPrice = document.querySelectorAll('.smallPrice');
	const sumBigPrice = getListPrice(bigPrice);
	const sumSmallPrice = getListPrice(smallPrice);
	const balancePrice = sumBigPrice - sumSmallPrice;

	// 할인가 랜더링
	const cartDiscountPrice = document.querySelector('.cartDiscountPrice');
	if (balancePrice <= 0) {
		cartDiscountPrice.innerText = `${changePriceLocale(balancePrice)}원`;
	} else {
		cartDiscountPrice.innerText = `-${changePriceLocale(balancePrice)}원`;
	}

	// # '정상가 + 할인가' 구하기
	const totalPriceHtml = document.querySelector('#totalPrice');
	const totalPrice = sumPrices - minusPrices;
	totalPriceHtml.value = `${changePriceLocale(totalPrice)}원`;

	// # 배송비
	const cartDeliveryPrice = document.querySelector('.cartDeliveryPrice');
	if (totalPrice <= 50000) {
		cartDeliveryPrice.innerText = '+3000원';
	} else {
		cartDeliveryPrice.innerText = '0원';
	}
}
renderCartPrice();

function handleCartCount(e) {
	let target = e.target;

	// input 잡기
	const findButton = (target) => target.closest('button');
	if (!findButton(target)) return;
	const findParent = findButton(target).parentNode;
	const findInput = findParent?.childNodes[5];
	const findInputValue = findInput?.value;
	if (!findInputValue) return;

	// input의 data-id 찾기
	const productId = attr(findInput, 'data-id');
	if (!productId) return;

	// 변화한 숫자 input에 랜더링
	const resultCount = handleCount(findButton(target), findInputValue, findInput);

	// 로컬스토리지에 변화하는 숫자 push
	const copyList = {...localCartItems};
	copyList[productId] = resultCount;
	saveStorage('cart', copyList);

	// data-id로 데이터베이스에서 정상가, 할인가 가져오기
	const userCartItemData = dbProductData.filter((item) => productId.includes(item.id)); // 해당하는 상품의 데이터베이스 정보 추출
	const nomalCost = userCartItemData[0].price; // 데이터베이스 정보에서 정상가 추출
	const saleCost = userCartItemData[0].salePrice; // 데이터베이스 정보에서 세일가 추출

	// '가격 * 갯수' 구하기
	let nomalcostResult = nomalCost * resultCount;
	let salecostResult = saleCost * resultCount;

	// 가격 콤마 찍기 + 글자 붙이기
	nomalcostResult = `${changePriceLocale(nomalcostResult)}원`;
	salecostResult = `${changePriceLocale(salecostResult)}원`;

	// # 리스트별 가격 변화 랜더링
	const updateText = (() => {
		// 텍스트 영역 찾기
		const findGrand = findParent.parentNode;
		const findNomalText = findGrand.children[7];
		const findSaleText = findGrand.children[9];
		// 텍스트 넣어주기
		findNomalText.innerText = nomalcostResult;
		if (!findSaleText) return;
		findSaleText.innerText = salecostResult;
	})();

	// 최종 가격 랜더링
	renderCartPrice();
}

bindEvent(cartList, 'click', handleCartCount);
