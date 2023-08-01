import {} from '/js/common/index.js';
import {attr, getNode, tiger} from '../lib/index.js';
import {renderDiscountProduct, renderRecomandProduct} from './mainPage/index.js';

const recomandList = getNode('.recomandItem');
const discountList = getNode('.discountItem');

async function renderProductList() {
	try {
		const response = await tiger.get('http://localhost:3000/products');
		const productData = response.data;
		productData.forEach((item) => renderRecomandProduct(recomandList, item));
		productData.reverse().forEach((item) => renderDiscountProduct(discountList, item));
	} catch (error) {
		console.log(error);
	}
}

fetch('/pages/common/nav.html')
	.then((res) => res.text())
	.then((data) => (nav.innerHTML = data));


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

recomandList.addEventListener('click', movePage);
discountList.addEventListener('click', movePage);
