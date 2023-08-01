import {} from '/js/common/index.js';

window.onload = function findNavOrigin() {
	const navOrigin = document.querySelector('.navOrigin');
	const navScroll = document.querySelector('.navScroll');

	window.onscroll = () => {
		if (window.scrollY >= 150) {
			navOrigin.classList.add('hidden');
			navScroll.classList.remove('hidden');
		} else {
			navOrigin.classList.remove('hidden');
			navScroll.classList.add('hidden');
		}
	};
};
