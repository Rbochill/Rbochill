import {getNode} from '/lib/dom/getNode.js';
import {getInputValue} from '/lib/dom/getInputValue.js';
import {bindEvent} from '../lib/dom/bindEvent.js';
import {tiger} from '../lib/utils/tiger.js';

// const response = await tiger.get('http://localhost:3000/products');
// const productData = response.data;

// console.log(productData);

const cartPage = getNode('.cart');

function handleCartCount(e) {
	let target = e.target;

	const cartCountDown = target.closest('.cartCountDown');
	if (!cartCountDown) return;
	const cartCountUp = target.closest('.cartCountUp');
	if (!cartCountUp) return;

	let cartCountValue = getInputValue('#cartItemCountInput');

	console.log(cartCountDown);
	console.log(cartCountUp);
}

bindEvent(cartPage, 'click', handleCartCount);
