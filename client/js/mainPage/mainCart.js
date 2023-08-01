import {attr, css, getNode, insertLast, loadStorage, saveStorage, tiger, toggleClass} from '../../lib/index.js';

const normalList = getNode('.recomandItem');
const discountList = getNode('.discountItem');
const modal = getNode('.modalWrapper');

async function handleCart(e) {
	e.preventDefault();

	const button = e.target.closest('figure');
	const list = e.target.closest('li');

	if (!button || !list) {
		return;
	}
	loadStorage();

	const id = attr(list, 'data-id');

	let count = 1;

	const obj = {
		[id]: count,
	};

	saveStorage('cart', obj);
}

// # 모달창 템플릿 생성 (이 상품 어떄요?)
function createNormalModal({name = '', price = ''}) {
	const template = /* html */ `
			<div class="modal">
				<div id="modal" class="modal-overlay">
					<div class="modal-window">
						<dl class="modalName">
							<dt class="sr-only">상품명</dt>
							<dd>${name}</dd>
						</dl>
						<dl class="modalPrice flex">
							<dt class="sr-only">정상가격</dt>
							<dd class="text-lg font-medium">${price.toLocaleString()} 원</dd>
						</dl>
						<dl class="modalCount">
							<dt class="sr-only">상품 수량</dt>
							<dd class="cartItemCount flex rounded-sm border border-gray/100">
								<button type="button" aria-label="수량 내리기" class="cartCountDown text-center">–</button>
								<label for="cartItemCountInput" class="sr-only">상품 수량을 좌우 버튼을 통해 조정해주세요</label>
								<input type="number" id="cartItemCountInput" name="cartItemCountInput" value="1" readonly class="text-center" />
								<button type="button" aria-label="수량 올리기" class="cartCountUp">+</button>
							</dd>
						</dl>
						<dl class="modalTotal flex flex-col">
							<div class="flex items-center justify-between">
								<dt class="text-[1.2rem] font-medium">합계</dt>
								<dd class="text-xl font-bold">${price.toLocaleString()} 원</dd>
							</div>
							<p class="modalEvent flex text-sm"><span class="block w-10 rounded-2xl bg-[orange] text-center text-white">적립</span>로그인 후, 적립 혜택 제공</p>
						</dl>
						<button class="modalCancel rounded-default border border-gray/200 text-lg">취소</button>
						<button class="modalCart rounded-default border border-gray/200 bg-[#a03edd] text-lg text-white">장바구니 담기</button>
					</div>
				</div>
			</div>
	`;

	return template;
}

// # 모달창 렌더링 (이 상품 어때요?)
function renderNormalModal(target, data) {
	insertLast(target, createNormalModal(data));
}

// # 모달창 템플릿 생성 (놓치면 후회할 가격)
function createDiscountModal({name = '', price = '', saleRatio = ''}) {
	const template = /* html */ `
			<div class="modal">
				<div id="modal" class="modal-overlay">
					<div class="modal-window">
						<dl class="modalName">
							<dt class="sr-only">상품명</dt>
							<dd>${name}</dd>
						</dl>
						<dl class="modalPrice flex">
						<dt class="sr-only">할인가격</dt>
						<dd class="text-lg font-medium">${Math.floor(price * (1 - saleRatio)).toLocaleString()} 원</dd>
						<dt class="sr-only">정상가격</dt>
						<dd class="font-medium cancelPrice"><s class="modalCancelPrice">${price.toLocaleString()} 원</s></dd>
						</dl>
						<dl class="modalCount">
							<dt class="sr-only">상품 수량</dt>
							<dd class="cartItemCount flex rounded-sm border border-gray/100">
								<button type="button" aria-label="수량 내리기" class="cartCountDown text-center">–</button>
								<label for="cartItemCountInput" class="sr-only">상품 수량을 좌우 버튼을 통해 조정해주세요</label>
								<input type="number" id="cartItemCountInput" name="cartItemCountInput" value="1" readonly class="text-center" />
								<button type="button" aria-label="수량 올리기" class="cartCountUp">+</button>
							</dd>
						</dl>
						<dl class="modalTotal flex flex-col">
							<div class="flex items-center justify-between">
								<dt class="text-[1.2rem] font-medium">합계</dt>
								<dd class="text-xl font-bold">${price.toLocaleString()} 원</dd>
							</div>
							<p class="modalEvent flex text-sm"><span class="block w-10 rounded-2xl bg-[orange] text-center text-white">적립</span>로그인 후, 적립 혜택 제공</p>
						</dl>
						<button class="modalCancel rounded-default border border-gray/200 text-lg">취소</button>
						<button class="modalCart rounded-default border border-gray/200 bg-[#a03edd] text-lg text-white">장바구니 담기</button>
					</div>
				</div>
			</div>
	`;

	return template;
}

// # 모달창 렌더링 (놓치면 후회할 가격)
function renderDiscountModal(target, data) {
	insertLast(target, createDiscountModal(data));
}

// # 모달창 취소하기
function cancelModal() {
	const reset = getNode('.modal');
	if (reset) {
		reset.remove();
	}
}

// # normal모달창 생성
async function openNormalModal(e) {
	e.preventDefault();
	console.log(e.target);
	try {
		const button = e.target.closest('.cartMain');
		const li = e.target.closest('li');

		if (!button) {
			return;
		}

		const id = attr(li, 'data-id');
		const response = await tiger.get(`http://localhost:3000/products/${id}`);
		const productData = response.data;
		renderNormalModal(modal, productData);

		const cancel = getNode('.modalCancel');
		cancel.addEventListener('click', cancelModal);
	} catch (error) {
		console.log(error);
	}
}

// # discount모달창 생성
async function openDiscountModal(e) {
	e.preventDefault();
	try {
		const button = e.target.closest('.cartMain');
		const li = e.target.closest('li');

		if (!button) {
			console.log('안댐');

			return;
		}

		const id = attr(li, 'data-id');
		const response = await tiger.get(`http://localhost:3000/products/${id}`);
		const productData = response.data;
		renderDiscountModal(modal, productData);

		const cancel = getNode('.modalCancel');
		cancel.addEventListener('click', cancelModal);
	} catch (error) {
		console.log(error);
	}
}

normalList.addEventListener('click', openNormalModal);
discountList.addEventListener('click', openDiscountModal);
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
// list.addEventListener('click', handleCart);
