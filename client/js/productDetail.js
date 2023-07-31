import {
	// attr,
	tiger,
	delayP,
	getNode,
	// changeColor,
	// clearContents,
	renderDataProductPage,
	renderEmptyProductPage,
} from '../lib/index.js';

const productBase = getNode('.productBase');
const productInfo = getNode('.productInfo');
const productDetail = getNode('.productDetail');
const productReview = getNode('.productReview');
const productQna = getNode('.productQna');
const productCartButton = getNode('#productCartButton');

async function renderProductList(targetId) {
	try {
		await delayP();

		const response = await tiger.get('http://localhost:3000/products');
		const productData = response.data;

		const targetIndex = productData.findIndex((item) => item.id === targetId);

		console.log(targetIndex);

		console.log(productData);
		renderDataProductPage(productBase, 'base', productData[targetIndex]);
		renderDataProductPage(productDetail, 'detail', productData[targetIndex]);
		renderDataProductPage(productInfo, 'info', productData[targetIndex]);
		renderDataProductPage(productReview, 'review', productData[targetIndex]);
		renderDataProductPage(productQna, 'qna', productData[targetIndex]);
		window.scroll(0, 0);
	} catch (err) {
		console.log(err);
		renderEmptyProductPage(productBase);
		// location.href = '404.html'
	}
}

console.log(productCartButton);

renderProductList('y7jn2m4j');

productCartButton.addEventListener('click', () => {
	console.log(productCartButton);
});
