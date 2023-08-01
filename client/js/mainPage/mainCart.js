import {attr, css, getNode, insertLast, loadStorage, saveStorage, tiger} from '../../lib/index.js';

const list = getNode('.recomandItem');
const modal = getNode('.modal');

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
					<dd class="cartItemCount rounded-sm border border-gray/100 flex">
						<button type="button" aria-label="수량 내리기" class="cartCountDown text-center">–</button>
						<label for="cartItemCountInput" class="sr-only">상품 수량을 좌우 버튼을 통해 조정해주세요</label>
						<input type="number" id="cartItemCountInput" name="cartItemCountInput" value="1" readonly class="text-center"/>
						<button type="button" aria-label="수량 올리기" class="cartCountUp">+</button>
					</dd>
				</dl>

				<dl class="modalTotal flex flex-col">
					<div class="flex justify-between items-center">
						<dt class="text-[1.2rem] font-medium">합계</dt>
						<dd class="text-xl font-bold">${price.toLocaleString()} 원</dd>
					</div>
					<p class="text-sm modalEvent flex"><span class="block w-10 rounded-2xl bg-[orange] text-center text-white">적립</span>로그인 후, 적립 혜택 제공</p>
				</dl>
				<button class="modalCancel rounded-default border border-gray/200 text-lg">취소</button>
				<button class="modalCart rounded-default border border-gray/200 bg-[#a03edd] text-lg text-white">장바구니 담기</button>
			</div>
		</div>
	`;

	return template;
}

// # 모달창 렌더링 (이 상품 어때요?)
function renderNormalModal(target, data) {
	insertLast(target, createNormalModal(data));
}

// # 모달창 템플릿 생성 (이 상품 어떄요?)
// function createDiscountModal({}) {
// 	asd;
// }

// # 모달창 렌더링 (이 상품 어때요?)
// function renderDiscountModal(target, data) {
// 	insertLast(target, createDiscountModal(data));
// }

// # 모달창 취소하기
function cancelModal(modal, cancel) {
	// const cancel = getNode('.modalCancel');
	const idModal = getNode('#modal');
	css(idModal, 'display', 'none');
}

// # 모달창
async function openModal(e) {
	e.preventDefault();

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
		console.log('렌더했음');

		const cancel = getNode('.modalCancel');
		// cancel.addEventListener('click', css(idModal, 'display', 'none'));

		cancelModal(modal, cancel);
		// const idModal = getNode('#modal');

		// await new Promise((resolve) => {
		// 	const cancel = getNode('.modalCancel');
		// 	const idModal = getNode('#modal');
		// 	cancel.addEventListener('click', css(idModal, 'display', 'none'));
		// });

		// console.log('1111' + css(idModal, 'display'));
		// // cancel.addEventListener('click', css(idModal, 'display', 'flex'));
		// console.log('2222' + css(idModal, 'display'));

		// console.log('3333' + css(idModal, 'display'));
	} catch (error) {
		console.log(error);
	}
}

list.addEventListener('click', openModal);
// cancel.addEventListener('click', css(idModal, 'display', 'none'));
// list.addEventListener('click', handleCart);
