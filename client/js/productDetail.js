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

const productDetailPage = getNode('.productDetailPage');

async function renderProductList() {
	try {
		await delayP();

		const response = await tiger.get('http://localhost:3000/products');
		const productData = response.data;

		console.log(productData);

		renderDataProductPage(productDetailPage, productData[7]);
	} catch (err) {
		console.log(err);
		renderEmptyProductPage(productDetailPage);
		// location.href = '404.html'
	}
}
renderProductList();
