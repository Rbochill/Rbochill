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

const productCartButton = $('#productCartButton');
// const moveInfo = $('#moveInfo');

// # 페이지 렌더링 함수
async function renderProductList(targetId) {
	try {
		await delayP();

		const response = await tiger.get('http://localhost:3000/products');
		const productData = response.data;

		const targetIndex = productData.findIndex((item) => item.id === targetId);

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
renderProductList('kxwg0rtj');

// # 장바구니 클릭이벤트
productCartButton.addEventListener('click', () => {
	console.log(productCartButton);
});

// # movePage 함수
window.addEventListener('scroll', () => {
	const moveButtonGroup = $('.moveButtonGroup');

	if (window.pageYOffset > moveButtonGroup.offsetTop) {
		moveButtonGroup.classList.add('sticky');
	} else {
		moveButtonGroup.classList.remove('sticky');
	}
});
