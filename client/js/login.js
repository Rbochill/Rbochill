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
let users = {};

async function handleLogin(e) {
	const {localStorage: storage} = globalThis;
	e.preventDefault();

	let response = await fetch('http://localhost:3000/users');
	users = await response.json();
	// 서버에서 가져온 데이터 (data.json에 있는 users는 배열이다. -> find를 이용해 배열 안을 찾는다.)
	const usersInform = users.find((item) => {
		// console.log(item); // 객체가 나옴
		// console.log(item.userId); // 아이디가 나옴
		return item.userId === inputId.value;
	});

	console.log(usersInform); // 사용자가 입력한 정보가 객체로 나타남

	//  사용자가 입력한 데이터
	const id = inputId.value;
	const pw = inputPw.value;

	//  서버에서 가져온 데이터
	let getUserId = usersInform.userId; // 객체니까 userInform.userId 이렇게 찾기
	let getUserPw = usersInform.password;

	if (id === getUserId && pw === getUserPw) {
		// 서버의 데이터를 로컬 스토리지에 저장
		storage.setItem('userId', usersInform.userId);
		storage.setItem('password', usersInform.password);
		storage.setItem('uniqueId', usersInform.uniqueId);
		storage.setItem('name', usersInform.name);
		storage.setItem('phoneNum', usersInform.phoneNum);
		storage.setItem('gender', usersInform.gender);
		storage.setItem('birthDate', usersInform.birthDate);

		// 로컬 스토리지의 유니크 아이디 가져오기
		const localUniqueId = storage.getItem('uniqueId');

		if (usersInform.uniqueId === localUniqueId) {
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
