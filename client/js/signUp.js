import {getNode, tiger} from '/lib/index.js';

const buttonSignUp = getNode('.buttonSignUp');
const {localStorage: storage} = globalThis;
// const URL = 'http://localhost:3000/users'

// # 랜덤한 문자 생성
function handleRandom() {
	const uniqueId = Math.random().toString(36).substring(2, 11);

	storage.setItem('uniqueId', uniqueId);
	// tiger post 통신을 통해서 uniqueId를 보낸다.
	tiger.post(URL, {uniqueId: uniqueId});
}

buttonSignUp.addEventListener('click', handleRandom);
