import {getNode} from '/lib/index.js';

const user = {
	id: 'asd@naver.com',
	pw: 'spdlqj123!@',
};

// # 아이디(@ 와 . 기호 포함 2글자 이상)
function emailReg(text) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(String(text).toLowerCase());
}

// # 비밀번호(최소 6 최대 16 글자, 0~9숫자 1개 이상 포함, 특수기호 1개 이상 포함)
function pwReg(text) {
	const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;

	return re.test(String(text).toLowerCase());
}

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
}

// # 비밀번호 확인
function handleCheckPw() {
	const value = this.value;
	if (pwReg(value)) {
		pwPass = true;
	} else {
		pwPass = false;
	}
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
