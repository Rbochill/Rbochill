import {getNode} from '/lib/index.js';

const buttonSignUp = getNode('.buttonSignUp');

function handleRandom() {
	const userId = Math.random().toString(36).substring(2, 11);

	return userId;
}

buttonSignUp.addEventListener('click', handleRandom);
