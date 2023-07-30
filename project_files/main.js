// % 공통 헤더, 공통 푸터
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const nav = document.querySelector('nav');

fetch('./pages/common/header.html')
	.then((res) => res.text())
	.then((data) => (header.innerHTML = data));

fetch('./pages/common/footer.html')
	.then((res) => res.text())
	.then((data) => (footer.innerHTML = data));

fetch('./pages/common/nav.html')
  .then((res) => res.text())
  .then((data) => (nav.innerHTML = data));