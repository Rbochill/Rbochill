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
let users = {
	// id: '0',
	// userId: 'abocill@gmail.com',
	// password: '123456789!',
	// uniqueId: '640b0d0d44',
	// name: '알보칠',
	// phoneNum: '010123456',
	// address: '서울특별시 종로구 종로3길 17 D타워, 16-17층',
	// gender: 'Non',
	// birthDate: '2023-07-28',
};
let usersIndex = 0;

// let usersIndex = users.length - 1;
// console.log(users);
// console.log(users.length - 1);

async function handleLogin(e) {
	const {localStorage: storage} = globalThis;
	e.preventDefault();

	let response = await fetch('http://localhost:3000/users');
	users = await response.json();
	// 서버에서 가져온 데이터
	const usersInform = users.find((item) => {
		// console.log(item.userId); // 객체가 나옴
		return item.userId === inputId.value;
	});

	console.log(usersInform);

	//  사용자가 입력한 데이터
	const id = inputId.value;
	const pw = inputPw.value;

	//  서버에서 가져온 데이터
	let getUserId = usersInform.userId; // userInform.userId 이렇게 찾기
	let getUserPw = usersInform.password;

	if (id === getUserId && pw === getUserPw) {
		// 서버의 데이터를 로컬 스토리지에 저장
		const serverUserId = users[usersIndex].userId;
		const serverPw = users[usersIndex].password;
		const serverUniqueId = users[usersIndex].uniqueId;
		const serverName = users[usersIndex].name;
		const serverPhoneNum = users[usersIndex].phoneNum;
		const serverGender = users[usersIndex].gender;
		const serverBirthDate = users[usersIndex].birthDate;

		storage.setItem('userId', serverUserId);
		storage.setItem('password', serverPw);
		storage.setItem('uniqueId', serverUniqueId);
		storage.setItem('name', serverName);
		storage.setItem('phoneNum', serverPhoneNum);
		storage.setItem('gender', serverGender);
		storage.setItem('birthDate', serverBirthDate);

		// 로컬 스토리지의 유니크 아이디 가져오기
		const localUniqueId = storage.getItem('uniqueId');

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
