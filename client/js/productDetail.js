import {} from '/js/common/index.js';

import {tiger, getNode as $, renderDataProductPage} from '../lib/index.js';

const productCartButton = $('#productCartButton');
// const moveInfo = $('#moveInfo');

// # 페이지 렌더링 함수
async function renderProductPage() {
	try {
		const Url = 'http://localhost:3000/';

		const productId = localStorage.getItem('clickProduct');
		// console.log(productId);

		const responseData = await tiger.get(Url + 'products');
		const productData = responseData.data;
		const targetIndex = productData.findIndex((item) => item.id === productId);

		const productElements = {
			productBase: $('.productBase'),
			productInfo: $('.productInfo'),
			productDetail: $('.productDetail'),
			productReview: $('.productReview'),
			productQna: $('.productQna'),
		};

		const pagesToRender = [
			{element: productElements.productDetail, type: 'detail'},
			{element: productElements.productInfo, type: 'info'},
			{element: productElements.productReview, type: 'review'},
			{element: productElements.productQna, type: 'qna'},
			{element: productElements.productBase, type: 'base'},
		];

		pagesToRender.forEach((pageElem) => {
			renderDataProductPage(pageElem.element, pageElem.type, productData[targetIndex]);
		});

		// window.scroll(0, 0);
	} catch (err) {
		console.log(err);
		// renderEmptyProductPage(productBase);
		location.href = '404.html';
	}
}

// # 장바구니 클릭이벤트
productCartButton.addEventListener('click', () => {});

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

	const productNavInfo = [
		{id: 'toProductInfo', buttonId: 'GoProductInfo'},
		{id: 'toProductDetail', buttonId: 'GoProductDetail'},
		{id: 'toProductReview', buttonId: 'GoProductReview'},
		{id: 'toProductQna', buttonId: 'GoProductQna'},
	];

	productNavInfo.forEach((nav, index) => {
		const targetElem = document.getElementById(nav.id);
		const buttonElem = document.getElementById(nav.buttonId);

		const targetTop = targetElem.getBoundingClientRect().top + window.scrollY - 50;
		const targetNextTop =
			productNavInfo.length !== index + 1 // 만약 마지막 요소가 아니면, 다음 요소의 탑 값을 얻고, 아니면 null.
				? document.getElementById(productNavInfo[index + 1].id).getBoundingClientRect().top + window.scrollY - 50
				: null;

		if (scrollPosition >= targetTop && (targetNextTop === null || scrollPosition < targetNextTop)) {
			resetNavButtons();
			buttonElem.style.backgroundColor = '#5f0080';
			buttonElem.style.color = '#ffffff';
		}
	});

	function resetNavButtons() {
		productNavInfo.forEach((nav) => {
			const buttonElem = document.getElementById(nav.buttonId);
			buttonElem.style.backgroundColor = '#ffffff';
			buttonElem.style.color = '#000000';
		});
	}
}

// # 페이지 렌더링 실행
renderProductPage();
