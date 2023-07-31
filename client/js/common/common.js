// % 공통 헤더, 공통 푸터

export const headerFooter = (function () {
	const header = document.querySelector('header');
	const footer = document.querySelector('footer');

	fetch('/pages/common/header.html')
		.then((res) => res.text())
		.then((data) => (header.innerHTML = data));

	fetch('/pages/common/footer.html')
		.then((res) => res.text())
		.then((data) => (footer.innerHTML = data));
})();
