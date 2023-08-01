import {} from '/js/common/index.js';
import {getNode, tiger, getNodes} from '/lib/index.js';
import {emailReg, pwReg} from '/js/common/function.js';

const inputId = getNode('.inputId');
const buttonId = getNode('.buttonId');
const inputPw1 = getNode('.inputPw1');
const inputPw2 = getNode('.inputPw2');
const inputName = getNode('.inputName');
const inputEmail = getNode('.inputEmail');
const buttonEmail = getNode('.buttonEmail');
const inputPhone = getNode('.inputPhone');
const buttonPhone = getNode('.buttonPhone');
const inputYear = getNode('.inputYear');
const inputMonth = getNode('.inputMonth');
const inputDay = getNode('.inputDay');
const inputGender = getNodes('.inputGender');
const checkImgs = getNodes('.checkImg');
const buttonSignUp = getNode('.buttonSignUp');

// # 아이디 입력
function handleInputId() {
	const errorMessage1 = getNode('.errorMessage1');
	errorMessage1.hidden = true;
	const value = this.value;
	if (!emailReg(value) && value.length !== 0) {
		errorMessage1.hidden = false;
	} else if (value.length === 0) {
		errorMessage1.hidden = true;
	} else {
		errorMessage1.hidden = true;
	}
}

// # 아이디 중복 확인
function handleCheckId() {
	const value = inputId.value.trim();
	if (value === '') {
		alert('아이디를 입력해주세요');

		return;
	} else if (!emailReg(value)) {
		alert('유효한 이메일 형식으로 입력해주세요');

		return;
	} else {
		alert('사용할 수 있는 ID 입니다.');
	}
}

// # 비밀번호 입력
function handleInputPw() {
	const errorMessage2 = getNode('.errorMessage2');
	errorMessage2.hidden = true;
	const value = this.value;
	if (!pwReg(value) && value.length !== 0) {
		errorMessage2.hidden = false;
	} else if (value.length === 0) {
		errorMessage2.hidden = true;
	} else {
		errorMessage2.hidden = true;
	}
}

// # 비밀번호 확인
function handleCheckPw() {
	const errorMessage3 = getNode('.errorMessage3');
	errorMessage3.hidden = true;
	if (inputPw1.value !== inputPw2.value && inputPw2.value !== '') {
		errorMessage3.hidden = false;
	} else {
		errorMessage3.hidden = true;
	}
}

// # 이메일
function handleEmail() {
	const errorMessage4 = getNode('.errorMessage4');
	errorMessage4.hidden = true;
	const value = this.value;
	if (!emailReg(value) && value.length !== 0) {
		errorMessage4.hidden = false;
	} else if (value.length === 0) {
		errorMessage4.hidden = true;
	} else {
		errorMessage4.hidden = true;
	}
}

function handleCheckEmail() {
	const value = inputEmail.value.trim();
	if (value === '') {
		alert('이메일을 입력해주세요');

		return;
	} else if (!emailReg(value)) {
		alert('유효한 이메일 형식으로 입력해주세요');

		return;
	} else {
		alert('사용할 수 있는 이메일 입니다.');
	}
}

// # 휴대폰
function handlePhone(event) {
	this.value = this.value.replace(/[^0-9.]/g, '');
	const maxLength = 11;
	const input = event.target;
	const value = input.value;

	if (value.length > maxLength) {
		input.value = value.slice(0, maxLength);
	}
}

function handlecheckPhone() {
	if (!inputPhone.value.startsWith('01') || inputPhone.value.length < 10 || 12 < inputPhone.value.length) {
		alert('잘못된 휴대폰 번호입니다. 확인 후 다시 시도해주세요.');
	} else {
		alert('인증번호가 발송되었습니다.');
	}
}

// # 생년월일
function handleYear(event) {
	const maxLength = 4;
	const input = event.target;
	const value = input.value;

	if (value.length > maxLength) {
		input.value = value.slice(0, maxLength);
	}
	this.value = this.value.replace(/[^0-9.]/g, '');
}

function handleDate(event) {
	const maxLength = 2;
	const input = event.target;
	const value = input.value;

	if (value.length > maxLength) {
		input.value = value.slice(0, maxLength);
	}
	this.value = this.value.replace(/[^0-9.]/g, '');
}

// # 이용 약관 동의
checkImgs.forEach((img) => {
	img.addEventListener('click', function () {
		const checkbox = this.closest('li').querySelector('.checkbox');

		if (checkbox) {
			checkbox.checked = !checkbox.checked;
			if (checkbox.checked) {
				img.src = '/assets/images/product-list/ic-checked.svg';
			} else {
				img.src = '/assets/images/product-list/ic-unchecked.svg';
			}
		}
	});
});

// # 가입하기
function handlesignUp(e) {
	const {localStorage: storage} = globalThis;
	e.preventDefault();

	// 필수 입력 항목들을 가져옵니다.
	const inputIdValue = inputId.value.trim();
	const inputPw1Value = inputPw1.value.trim();
	const inputPw2Value = inputPw2.value.trim();
	const inputNameValue = inputName.value.trim();
	const inputEmailValue = inputEmail.value.trim();
	const inputPhoneValue = inputPhone.value.trim();

	// 필수 항목이 모두 입력되었는지 확인합니다.
	if (
		inputIdValue !== '' &&
		inputPw1Value !== '' &&
		inputPw2Value !== '' &&
		inputNameValue !== '' &&
		inputEmailValue !== '' &&
		inputPhoneValue !== '' &&
		emailReg(inputIdValue) && // 아이디가 유효한 이메일 형식인지 확인
		pwReg(inputPw1Value) && // 비밀번호가 조건에 맞는지 확인
		emailReg(inputEmailValue) &&
		inputPw1Value === inputPw2Value // 비밀번호와 비밀번호 확인이 일치하는지 확인
	) {
		// 모든 조건을 만족하면 가입 처리를 합니다.
		const uniqueId = Math.random().toString(36).substring(2, 11);
		const birthday = `${inputYear.value}-${inputMonth.value}-${inputDay.value}`;

		storage.setItem('userId', inputIdValue);
		storage.setItem('password', inputPw1Value);
		storage.setItem('uniqueId', uniqueId);
		storage.setItem('name', inputNameValue);
		storage.setItem('phoneNum', inputPhoneValue);
		storage.setItem('gender', inputGender.value);
		storage.setItem('birthDate', [birthday]);

		window.location.href = '/pages/login.html';

		// 유저 정보 전송
		tiger.post('http://localhost:3000/users', {
			id: '',
			userId: inputIdValue,
			password: inputPw1Value,
			uniqueId: uniqueId,
			name: inputNameValue,
			phoneNum: inputPhoneValue,
			gender: inputGender.value,
			birthDate: ['', '', ''],
		});
	} else {
		// 필수 입력 항목이 모두 만족되지 않으면 알림창을 띄웁니다.
		alert('필수입력사항을 기입해주세요.');
	}
}

inputId.addEventListener('input', handleInputId);
buttonId.addEventListener('click', handleCheckId);
inputPw1.addEventListener('input', handleInputPw);
inputPw2.addEventListener('input', handleCheckPw);
inputEmail.addEventListener('input', handleEmail);
buttonEmail.addEventListener('click', handleCheckEmail);
inputPhone.addEventListener('input', handlePhone);
buttonPhone.addEventListener('click', handlecheckPhone);
inputYear.addEventListener('input', handleYear);
inputMonth.addEventListener('input', handleDate);
inputDay.addEventListener('input', handleDate);
buttonSignUp.addEventListener('click', handlesignUp);
