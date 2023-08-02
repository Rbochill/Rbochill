// html에서 cdn을 호출하여서 js에서는 안해주어도 된다.
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

// # swiper article
const swiperMain = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	autoplay: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
});

function hideOnFirstSlide() {
	const isFirstSlide = this.realIndex === 0;

	if (isFirstSlide) {
		this.navigation.prevEl.style.display = 'none';
	} else {
		this.navigation.prevEl.style.display = 'flex';
	}
}

function hideOnLastSlide() {
	const isLastSlide = this.isEnd;

	if (isLastSlide) {
		this.navigation.nextEl.style.display = 'none';
	} else {
		this.navigation.nextEl.style.display = 'flex';
	}
}

const swiperItem = new Swiper('.itemSwiper', {
	slidesPerView: 4,
	spaceBetween: 30,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	observer: true,
	observeParents: true,
	on: {
		init: hideOnFirstSlide,
		slideChange: function () {
			hideOnFirstSlide.call(this);
			hideOnLastSlide.call(this);
		},
	},
});

// # swiper item
document.addEventListener('DOMContentLoaded', swiperItem);

const scroll = function () {
	let quickMenu = document.querySelector('.recentlyItem');
	if (!quickMenu) {
		return;
	}

	let windowHeight = window.innerHeight;
	let maxTopValue = windowHeight - quickMenu.offsetHeight - 100; // 최대 상단 설정
	let targetTop = 75 + window.scrollY; // 상단 여백 업데이트
	targetTop = Math.min(targetTop, maxTopValue); // 최대 상단 값보다 크지 않게 제한
	// 현재 스크롤 위치에 따라 퀵 메뉴의 top 값을 업데이트
	quickMenu.style.top = targetTop + 'px';
};

// # 최근 본 상품 스크롤 처리
window.addEventListener('scroll', scroll);

// # 최근 본 상품(수직)
