import {} from '/js/common/index.js';
import {getNode} from '/lib/index.js';
import {emailReg, pwReg} from '/js/common/function.js';

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
// 서버에서 가져온 데이터
console.log('id :', user[0].userId);
console.log(('pw :', user[0].password));

function handleLogin(e) {
	const {localStorage: storage} = globalThis;
	e.preventDefault();
	//  사용자가 입력한 데이터
	const id = inputId.value;
	const pw = inputPw.value;
	//  서버에서 가져온 데이터
	let getUserId = user[0].userId;
	let getUserPw = user[0].password;

	if (id === getUserId && pw === getUserPw) {
		// 서버의 데이터를 로컬 스토리지에 저장
		const serverUniqueId = user[0].uniqueId;
		storage.setItem('uniqueId', serverUniqueId);

		// 로컬 스토리지의 데이터 유니크 아이디 가져오기
		const localUniqueId = storage.getItem('uniqueId');
		console.log('localUniqueId :', localUniqueId);
		console.log('uniqueId :', user[0].uniqueId);

		if (serverUniqueId === localUniqueId) {
			alert('성공');
			window.location.href = '/index.html';
		}
	} else {
		alert('정확한 아이디와 비밀번호를 입력해 주세요.');
	}
}

// # 회원가입 페이지로 이동
function handletoSignUp() {
	window.location.href = '/pages/signUp.html';
}

inputId.addEventListener('input', handleCheckId);
inputPw.addEventListener('input', handleCheckPw);
buttonLogin.addEventListener('click', handleLogin);
buttonSignUp.addEventListener('click', handletoSignUp);
