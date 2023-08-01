import {} from '/js/common/index.js';

// # 스크롤에 따른 네비게이션 변화 구현
window.onload = function findNavOrigin() {
	const navOrigin = document.querySelector('.navOrigin');
	const navScroll = document.querySelector('.navScroll');

	window.onscroll = () => {
		if (window.scrollY >= 168) {
			navOrigin.classList.add('hidden');
			navScroll.classList.remove('hidden');
		} else {
			navOrigin.classList.remove('hidden');
			navScroll.classList.add('hidden');
		}
	};
	activeNavHover();
};

// function changeNavigation() {
// 	const scrollPosition = window.scrollY;
// 	const productInfoPos = $('#toProductInfo');
// 	const targetH2Position = productInfoPos.getBoundingClientRect().top + window.scrollY;
// 	const button = $('#GoProductInfoPos');

// 	if (scrollPosition >= targetH2Position) {
// 		button.style.backgroundColor = '#5f0080';
// 		button.style.color = '#ffffff';
// 	} else {
// 		button.style.backgroundColor = '#ffffff';
// 		button.style.color = '#000000';
// 	}
// }

// window.addEventListener('scroll', () => {
// 	changeButtonColor();
// });

// # 카테고리 hover시 메뉴 나타남
function activeNavHover() {
	const categoryButton = document.querySelector('.categoryButton');
	const navHover = document.querySelector('.navHover');
	function removeClass() {
		navHover.classList.remove('hidden');
	}
	function addClass() {
		navHover.classList.add('hidden');
	}
	categoryButton.addEventListener('focus', removeClass);
	categoryButton.addEventListener('mouseover', removeClass);
	categoryButton.addEventListener('focusout', addClass);
	categoryButton.addEventListener('mouseout', addClass);
	navHover.addEventListener('focus', removeClass);
	navHover.addEventListener('mouseover', removeClass);
	navHover.addEventListener('focusout', addClass);
	navHover.addEventListener('mouseout', addClass);
}
