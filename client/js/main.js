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

async function movePage(e) {
	e.preventDefault();

	const list = e.target.closest('li');
	if (!list) {
		return;
	}
	const productId = attr(list, 'data-id');

	// # 클릭된 아이템 유저데이터에 추가

	const response = await tiger.get('http://localhost:3000/users');
	const users = response.data;

	const firstUser = users[0];
	const id = firstUser.id;

	firstUser.recently.push(productId);

	// # data.json users 업데이트

	await tiger.delete(`http://localhost:3000/users/${id}`).then(() => {
		tiger.post('http://localhost:3000/users', firstUser);
	});
	window.location.href = `http://localhost:5500/pages/productDetail.html`;
}

// tiger.post('http://localhost:3000/pageNow/', {productId: productId});

recomandList.addEventListener('click', movePage);
discountItem.addEventListener('click', movePage);
