// import {} from '/js/common/index.js';
import {getNode} from '/lib/index.js';
import {emailReg, pwReg} from '/js/common/function.js';

// const user = {
// 	id: 'asd@naver.com',
// 	pw: 'spdlqj123!@',
// };

const inputId = getNode('.inputId');
const inputPw = getNode('.inputPw');
const buttonLogin = getNode('.buttonLogin');
const buttonSignUp = getNode('.buttonSignUp');

let emailPass = false;
let pwPass = false;

// # 아이디 확인
function handleCheckId() {
	const value = this.value;

	if (emailReg(value)) {
		emailPass = true;
	} else {
		emailPass = false;
	}

	return emailPass;
}

// # 비밀번호 확인
function handleCheckPw() {
	const value = this.value;
	if (pwReg(value)) {
		pwPass = true;
	} else {
		pwPass = false;
	}

	return pwPass;
}

// # 로그인
let user = {};

let response = await fetch('http://localhost:3000/users');
user = await response.json();

function handleLogin(e) {
	e.preventDefault();

	const id = inputId.value;
	const pw = inputPw.value;
	let getUserId = user[0].userId;
	let getUserPw = user[0].password;
	if (id === getUserId && pw === getUserPw) {
		alert(user[0].uniqeId);

		window.location.href = '/index.html';
	} else {
		alert('정확한 아이디와 비밀번호를 입력해 주세요.');
	}
}

function handleMove() {
	window.location.href = '/pages/signUp.html';
}

inputId.addEventListener('input', handleCheckId);
inputPw.addEventListener('input', handleCheckPw);
buttonLogin.addEventListener('click', handleLogin);
buttonSignUp.addEventListener('click', handleMove);
