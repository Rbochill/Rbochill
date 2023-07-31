import {getNode} from '/lib/index.js';

const buttonSignUp = getNode('.buttonSignUp');
const {localStorage: storage} = globalThis;

// # 랜덤한 문자 생성
function handleRandom() {
	const userId = Math.random().toString(36).substring(2, 11);

	storage.setItem('uniqueId', userId);
}

buttonSignUp.addEventListener('click', handleRandom);
