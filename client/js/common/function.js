// # 아이디(@ 와 . 기호 포함 2글자 이상)
export function emailReg(text) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(String(text).toLowerCase());
}

// # 비밀번호(최소 6 최대 16 글자, 0~9숫자 1개 이상 포함, 특수기호 1개 이상 포함)
export function pwReg(text) {
	const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;

	return re.test(String(text).toLowerCase());
}
