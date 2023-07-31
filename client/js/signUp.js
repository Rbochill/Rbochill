import {getNode, tiger, getNodes} from '/lib/index.js';
import {emailReg, pwReg} from '/js/common/function.js';

const inputId = getNode('.inputId');
const inputPw1 = getNode('.inputPw1');
const inputPw2 = getNode('.inputPw2');
const inputName = getNode('.inputName');
const inputEmail = getNode('.inputEmail');
const inputPhone = getNode('.inputPhone');
const inputYear = getNode('.inputYear');
const inputMonth = getNode('.inputMonth');
const inputDay = getNode('.inputDay');
const inputGender = getNodes('.inputGender');

const buttonSignUp = getNode('.buttonSignUp');
const errorMessage1 = getNode('.errorMessage1');
const errorMessage2 = getNode('.errorMessage2');
const {localStorage: storage} = globalThis;
// const URL = 'http://localhost:3000/users';

errorMessage1.hidden = true;
errorMessage2.hidden = true;

// # 아이디 입력
function handleCheckId() {
	const value = this.value;
	if (!emailReg(value) && value.length !== 0) {
		errorMessage1.hidden = false;
	} else if (value.length === 0) {
		errorMessage1.hidden = true;
	} else {
		errorMessage1.hidden = true;
	}
}

// # 비밀번호 입력
function handleCheckPw() {
	const value = this.value;
	if (!pwReg(value) && value.length !== 0) {
		errorMessage2.hidden = false;
	} else if (value.length === 0) {
		errorMessage2.hidden = true;
	} else {
		errorMessage2.hidden = true;
	}
}

// # 가입하기
function handlesignUp(e) {
	e.preventDefault();

	const selectedGender = Array.from(inputGender).find((radio) => radio.checked);
	if (inputId.value !== '' && inputPw1.value !== '' && inputPw2.value !== '' && inputName.value !== '' && inputEmail.value !== '' && inputPhone.value !== '') {
		const uniqueId = Math.random().toString(36).substring(2, 11);
		const birthday = `${inputYear.value}-${inputMonth.value}-${inputDay.value}`;
		storage.setItem('userId', inputId.value);
		storage.setItem('password', inputPw1.value);
		storage.setItem('uniqueId', uniqueId);
		storage.setItem('name', inputName.value);
		storage.setItem('phoneNum', inputPhone.value);
		storage.setItem('gender', selectedGender.value);
		storage.setItem('birthDate', [birthday]);

		window.location.href = '/pages/login.html';

		// 유저 정보 전송
		tiger.post(URL, {
			userId: inputId.value,
			password: inputPw1.value,
			uniqueId: uniqueId,
			name: inputName.value,
			phoneNum: inputPhone.value,
			gender: '',
			birthDate: ['', '', ''],
		});
	} else {
		alert('필수입력사항을 기입해주세요.');
	}
}

inputId.addEventListener('input', handleCheckId);
inputPw1.addEventListener('input', handleCheckPw);
buttonSignUp.addEventListener('click', handlesignUp);
