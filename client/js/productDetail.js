import {} from '/js/common/index.js';

import {tiger, delayP, getNode as $, renderDataProductPage, renderEmptyProductPage} from '../lib/index.js';

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
	changeButtonColor();
	if (window.pageYOffset > moveButtonGroup.offsetTop) {
		moveButtonGroup.classList.add('sticky');
	} else {
		moveButtonGroup.classList.remove('sticky');
	}
});

// # 네비게이션 색 바꾸기
function changeButtonColor() {
	const scrollPosition = window.scrollY;

	const productInfo = $('#toProductInfo');
	const productDetail = $('#toProductDetail');
	const productReview = $('#toProductReview');
	const productQna = $('#toProductQna');

	const targetInfo = productInfo.getBoundingClientRect().top + window.scrollY - 50;
	const targetDetail = productDetail.getBoundingClientRect().top + window.scrollY - 50;
	const targetReview = productReview.getBoundingClientRect().top + window.scrollY - 50;
	const targetQna = productQna.getBoundingClientRect().top + window.scrollY - 50;

	const buttonInfo = $('#GoProductInfo');
	const buttonDetail = $('#GoProductDetail');
	const buttonReview = $('#GoProductReview');
	const buttonQna = $('#GoProductQna');

	if (scrollPosition >= targetInfo && scrollPosition < targetDetail) {
		baseSetNav();
		buttonInfo.style.backgroundColor = '#5f0080';
		buttonInfo.style.color = '#ffffff';
	} else if (scrollPosition >= targetDetail && scrollPosition < targetReview) {
		baseSetNav();
		buttonDetail.style.backgroundColor = '#5f0080';
		buttonDetail.style.color = '#ffffff';
	} else if (scrollPosition >= targetReview && scrollPosition < targetQna) {
		baseSetNav();
		buttonReview.style.backgroundColor = '#5f0080';
		buttonReview.style.color = '#ffffff';
	} else if (scrollPosition >= targetQna) {
		baseSetNav();
		buttonQna.style.backgroundColor = '#5f0080';
		buttonQna.style.color = '#ffffff';
	} else {
		baseSetNav();
	}
	function baseSetNav() {
		buttonInfo.style.backgroundColor = '#ffffff';
		buttonInfo.style.color = '#000000';
		buttonDetail.style.backgroundColor = '#ffffff';
		buttonDetail.style.color = '#000000';
		buttonReview.style.backgroundColor = '#ffffff';
		buttonReview.style.color = '#000000';
		buttonQna.style.backgroundColor = '#ffffff';
		buttonQna.style.color = '#000000';
	}
}
