// import {} from '/js/common/index.js';
import {getNode} from '/lib/index.js';
import {emailReg, pwReg} from '/js/common/function.js';

const user = {
	id: 'asd@naver.com',
	pw: 'spdlqj123!@',
};

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
function handleLogin(e) {
	e.preventDefault();
	if (emailPass && pwPass) {
		const id = inputId.value;
		const pw = inputPw.value;
		const getUserId = user.id;
		const getUserPw = user.pw;
		if (id === getUserId && pw === getUserPw) {
			window.location.href = '/index.html';
		} else {
			alert('정확한 아이디와 비밀번호를 입력해 주세요.');
		}
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
