import {} from '/js/common/index.js';
import {attr, getNode, tiger} from '../lib/index.js';
import {renderDiscountProduct, renderRecomandProduct} from './mainPage/index.js';

const recomandList = getNode('.recomandItem');
const discountItem = getNode('.discountItem');

async function renderProductList() {
	try {
		const response = await tiger.get('http://localhost:3000/products');
		const productData = response.data;

		productData.forEach((item) => renderRecomandProduct(recomandList, item));
		productData.reverse().forEach((item) => renderDiscountProduct(discountItem, item));
	} catch (error) {
		console.log(error);
	}
}

renderProductList();

function movePage(e) {
	e.preventDefault();

	const list = e.target.closest('li');

	if (!list) {
		return;
	}

	const id = attr(list, 'data-id');
	// console.log(id); // 이거 지우고 사용하시면 될듯
	// & 동혁님함수(id);
}

recomandList.addEventListener('click', movePage);
discountItem.addEventListener('click', movePage);
