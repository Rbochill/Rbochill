import {} from '/js/common/index.js';

import {
	// attr,
	tiger,
	delayP,
	getNode as $,
	// changeColor,
	// clearContents,
	renderDataProductPage,
	renderEmptyProductPage,
} from '../lib/index.js';

const productBase = $('.productBase');
const productInfo = $('.productInfo');
const productDetail = $('.productDetail');
const productReview = $('.productReview');
const productQna = $('.productQna');

const Url = 'http://localhost:3000/';

const productCartButton = $('#productCartButton');
// const moveInfo = $('#moveInfo');

// # 페이지 렌더링 함수
async function renderProductPage() {
	try {
		await delayP();

		const responseData = await tiger.get(Url + 'products');
		const productData = responseData.data;

		console.log(productData);

		const responseId = await tiger.get(Url + 'users');
		const productId = responseId.data[0].recently;
		console.log(productId[productId.length - 1]);
		// const responseId = await tiger.get(Url + 'users');
		// const productId = Object.values(responseId.data[0].recently);
		// console.log(productId);
		// console.log(productId);

		const targetIndex = productData.findIndex((item) => item.id === productId[productId.length - 1]);

		renderDataProductPage(productDetail, 'detail', productData[targetIndex]);
		renderDataProductPage(productInfo, 'info', productData[targetIndex]);
		renderDataProductPage(productReview, 'review', productData[targetIndex]);
		renderDataProductPage(productQna, 'qna', productData[targetIndex]);
		renderDataProductPage(productBase, 'base', productData[targetIndex]);
		// window.scroll(0, 0);
	} catch (err) {
		console.log(err);
		renderEmptyProductPage(productBase);
		// location.href = '404.html'
	}
}

// # 페이지 렌더링 실행
renderProductPage();

// # 장바구니 클릭이벤트
productCartButton.addEventListener('click', () => {
	// tiger.post(Url + 'pageNow', {now: 'asdasd'});
});

// # scrollPage 네비게이션 고정
window.addEventListener('scroll', () => {
	const moveButtonGroup = $('.moveButtonGroup');

	if (window.pageYOffset > moveButtonGroup.offsetTop) {
		moveButtonGroup.classList.add('sticky');
	} else {
		moveButtonGroup.classList.remove('sticky');
	}
});
