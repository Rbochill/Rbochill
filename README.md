[ 멋쟁이 사자처럼 🦁 프론트엔드 스쿨 6기 | **JavaScripts 팀프로젝트** ]

<img src="https://github.com/Rbochill/Rbochill/assets/105577805/54175f54-e448-47ec-8e41-58f737cdf7f3" width=500px>

# 프로젝트 |&nbsp;&nbsp; <img src="https://github.com/Rbochill/Rbochill/assets/105577805/9c3250dc-6e8c-4b5f-9fa7-9ecf38e53e4f" width="25px"/> 마켓 칼리 Karly

</br>

쇼핑몰 마켓 칼리 사이트를 구현합니다.

</br>

![main](https://github.com/Rbochill/Rbochill/assets/105577805/145fd814-4c9b-4edd-b779-31dd2b8caf70)

</br>

# 📄 목차

- [프로젝트 |   마켓 칼리 Karly](#프로젝트---마켓-칼리-karly)
- [📄 목차](#-목차)
- [👥 팀 소개 |   7조 알보7️⃣💊](#-팀-소개--7조-알보7️⃣)
- [📆 개발 기간 | 2023년 7월 27일 ~ 8월 2일](#-개발-기간--2023년-7월-27일--8월-2일) - [2023년7월 27일](#2023년7월-27일) - [2023년 7월 28일](#2023년-7월-28일) - [2023년 7월 29일 ~ 8월 1일](#2023년-7월-29일--8월-1일) - [2023년 8월 2일](#2023년-8월-2일)
- [🛠️ 기술 스택](#️-기술-스택) - [HTML](#html) - [CSS](#css) - [Package Manager](#package-manager) - [Git](#git) - [Tools](#tools)
- [📖 How to ...](#-how-to-)
- [🖥️ 코드리뷰 with 구현 페이지(고정형)](#️-코드리뷰-with-구현-페이지고정형)
  - [코드리뷰 | 메인 페이지](#코드리뷰--메인-페이지)
  - [코드리뷰 | 헤더 ･ 네비게이션](#코드리뷰--헤더--네비게이션)
    - [기능 : 배너 닫힘](#기능--배너-닫힘)
    - [기능 : 네비게이션 skip](#기능--네비게이션-skip)
    - [기능: hover 메뉴](#기능-hover-메뉴)
    - [기능 : 스크롤 navigation](#기능--스크롤-navigation)
  - [코드리뷰 | 장바구니](#코드리뷰--장바구니)
    - [기능 : 상품 랜더링](#기능--상품-랜더링)
    - [기능 : 상품 수량 변화](#기능--상품-수량-변화)
    - [수량 변화에 따른 가격 변화](#수량-변화에-따른-가격-변화)
  - [코드리뷰 | 회원가입](#코드리뷰--회원가입)
    - [회원가입](#회원가입)
    - [가입하기](#가입하기)
  - [코드리뷰 | 로그인](#코드리뷰--로그인)
  - [코드리뷰 | 상품 상세](#코드리뷰--상품-상세)
  - [코드리뷰 | footer](#코드리뷰--footer)
- [🔎 문법 검사](#-문법-검사)
  - [메인](#메인)
  - [로그인](#로그인)
  - [회원가입](#회원가입-1)
  - [재품 상세 페이지](#재품-상세-페이지)
  - [장바구니](#장바구니)
- [💻 크로스 브라우징](#-크로스-브라우징)
- [🎤 프로젝트 소감](#-프로젝트-소감)

</br>

# 👥 팀 소개 |&nbsp;&nbsp; 7조 알보7️⃣💊

|                                                             프로필                                                             |      이름      |                                                                                                      GitHub                                                                                                       |
| :----------------------------------------------------------------------------------------------------------------------------: | :------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/Rbochill/Rbochill/assets/105577805/dcd0f20b-b6bd-4bce-b78f-52b0bd684080" width="40" height="40"/> | 신승민(팀장)🐧 |                         https://github.com/M-Moong <br/> 구현의 목적보다는 실력증진과 자연스러운 활용을 했으면 좋겠습니다. <br/> 역할 : 조장, 스크럼 마스터 <br/> 맡은 파트 : Main 페이지                         |
| <img src="https://github.com/Rbochill/Rbochill/assets/105577805/bcbbc0b5-fc1d-41dc-ab1f-527f18e78219" width="40" height="40"/> |    김다인🐻‍❄️    |                                             https://github.com/kimInDa <br/> 함께 끝까지 완주하기!<br/>역할 : 서기, Wiki 마스터<br/>맡은 파트 : 헤더, 장바구니 페이지                                             |
| <img src="https://github.com/Rbochill/Rbochill/assets/105577805/a0e041f7-2f58-45c7-9fe3-bd6ca38d8e5d" width="40" height="40"/> |    신동혁🐳    | https://github.com/dongapple <br/> 협업능력을 증진시키고 내가 할수있는 최선을 다하기‼<br/>역할 : 데이터 마스터, 이미지 마스터<br/>맡은 파트 : 상품 상세정보 페이지, 푸터, 메인 최근 상품 목록, 데이터베이스 구성 |
| <img src="https://github.com/Rbochill/Rbochill/assets/105577805/128e2884-ec6c-482b-96df-9d0c8728c751" width="40" height="40"/> |    정소희🐼    |                                    https://github.com/haha41 <br/>맡은 분량 성실히 해내기<br/>역할 : 컨벤션 마스터, 알보칠 신입<br/>맡은 파트 : 로그인 페이지, 회원가입 페이지                                    |

</br>

# 📆 개발 기간 | 2023년 7월 27일 ~ 8월 2일

#### 2023년7월 27일

- 아이스 브레이킹
- 팀명, 조장 정하기
- 프로젝트 주제 정하기

#### 2023년 7월 28일

- 기술 스택, 코딩 컨벤션, 접근성 체크리스트, 구현 페이지 범위 확정
- 개발 환경 셋팅
- 파트 배분

#### 2023년 7월 29일 ~ 8월 1일

- 개인 파트 구현

#### 2023년 8월 2일

- 디버깅
- 배포
- README.md 작성
- 과제 제출 🥳

</br>

# 🛠️ 기술 스택

#### HTML

<img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/fd7807ea-6cdb-47e5-a0dd-b77db83b3415" width="28px"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" />

#### CSS

<img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/bed6550a-a5b3-48e2-a6f7-b105c6bd3455" width="28px"/> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />&nbsp;&nbsp;&nbsp;<img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/24ed357f-a194-4fb5-b1b4-00dc200d04d7" width="28px"/> <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=n&logoColor=white" />

#### Package Manager

<img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/98668e2c-d97a-45d0-8f75-e14084e75d09" width="28px"/> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
<img src="https://github.com/Rbochill/Rbochill/assets/105577805/0fd7a655-7bbf-4c85-b47e-fecb1ef7ae07" width="28px"/> <img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=JSON&logoColor=white" />

#### Git

<img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/91c4abfd-6805-45ee-8305-c72492bd1afc" width="28px"/> <img src="https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=Git&logoColor=white" />&nbsp;&nbsp;&nbsp;<img src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/748d9e80-bf75-4d9a-bee3-4815ecaeb810" width="28px"/> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white" />

#### Tools

<img src="https://github.com/Rbochill/Rbochill/assets/105577805/12c1ac10-3975-47bc-b271-d8656361d9a2" width="28px"/> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white" />
<img src="https://github.com/Rbochill/Rbochill/assets/105577805/2972553a-b861-4707-a1d1-fbaf8b69f3ca" width="28px"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white" />

</br>

# 📖 How to ...

- 코딩 컨벤션 [[바로가기]](https://github.com/Rbochill/Rbochill/wiki/%F0%9F%93%9D-%EC%BD%94%EB%94%A9-%EC%BB%A8%EB%B2%A4%EC%85%98-Cording-Convention)
- 커밋 컨밴션 [[바로가기]](https://github.com/Rbochill/Rbochill/wiki/%F0%9F%93%9D-%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98-Commit-Convention)
- 스프린트 회의록
  - [2023년 7월 27일(목)](<https://github.com/Rbochill/Rbochill/wiki/%5BSptint-Meeting%5D-2023%EB%85%84-7%EC%9B%94-27%EC%9D%BC(%EB%AA%A9)>)
  - [2023년 7월 28일(금)](<https://github.com/Rbochill/Rbochill/wiki/%5BSptint-Meeting%5D-2023%EB%85%84-7%EC%9B%94-28%EC%9D%BC(%EA%B8%88)>)
- 데일리 스크럼
  - [2023년 7월 18일 ~ 8월 2일](<https://github.com/Rbochill/Rbochill/wiki/%5BDaily-Scrum%5D-2023%EB%85%84-7%EC%9B%94-28%EC%9D%BC(%EA%B8%88)>)

</br>

# 🖥️ 코드리뷰 with 구현 페이지(고정형)

- 마켓 컬리 사이트를 데스크톱 1920px 고정형으로 구현하였습니다.

## 코드리뷰 | 메인 페이지

![메인상단](https://github.com/Rbochill/Rbochill/assets/105577805/eadfcae5-d74c-4c16-914c-0976c2516738)

- swiper로 자동으로 슬라이드를 구현하였습니다.

![메인 장바구니 기능](https://github.com/Rbochill/Rbochill/assets/105577805/a521b4e6-a8c6-4876-9604-d47f06f70f3a)

- 장바구니 버튼을 클릭하면 수량을 선택할 수 있는 모달창이 뜹니다.
- 모달창에서 버튼에 따라 수량을 조절할 수 있습니다.
- 장바구니 담기 버튼을 누르면 장바구니에 상품이 담깁니다.

![최근본 상품](https://github.com/dongapple/EXAMPLE/assets/74224516/5db90790-a6fa-4547-9b85-13fb2232c632)
```js
if (firstUser) {
// 배열에서 중복 값을 찾기
const index = firstUser.recently.indexOf(productId);

if (index > -1) {
	// 기존 값이 있으면 제거
	firstUser.recently.splice(index, 1);
}
//
firstUser.recently.push(productId);
if (firstUser.recently.length > 4) {
	firstUser.recently.shift(); // 배열의 길이가 5를 초과하면 맨 앞 데이터 삭제
}
}
```
- 아이템이 클릭되서 상세상품으로 넘어갈때 클릭된 아이템의 id 값을 유저 recentlyitem 에 저장을 함
- 저장된 값이 5개를 초과할 경우 맨 처음 들어온 값을 제거해줌
- 저장할 값이 기존에 있는 경우 기존의 값을 지우고 새로 추가해줌


## 코드리뷰 | 헤더 ･ 네비게이션

### 기능 : 배너 닫힘

![헤더-배너](https://github.com/Rbochill/Rbochill/assets/105577805/e93bd443-32d1-4b45-b5de-8ca550b3f3f1)

```js
topBannerButton.addEventListener('click', () => {
	topBanner.classList.add('hidden');
});
```

- 배너의 닫힘 버튼에 `addEventListener`로 `click`이벤트를 부여합니다.
- 닫힘 버튼을 클릭 시 `hidden` 클래스를 추가하여 tailwindcss가 `display-none`이 되어 숨김 처리 하도록 합니다.

### 기능 : 네비게이션 skip

![헤더-네비게이션스킵](https://github.com/Rbochill/Rbochill/assets/105577805/093a9432-f183-4bb9-80b1-c67042c86a6d)

- 키보드 탭으로 접근가능한 네비게이션 skip 버튼을 구현하였습니다.
- skip 영역에 `focus`가 되거나 `focus`가 `out`됨에 따라 `'sr-only'` 속성을 추가하고 빼는 이벤트를 `addEventListener` 로 부여하였습니다.

### 기능: hover 메뉴

![헤더-호버](https://github.com/Rbochill/Rbochill/assets/105577805/776e1fbc-e8ef-46c5-9f5d-2edc8781de55)

- 네비게이션의 카테고리 버튼에 `addEventListener`로 `mouseover`, `mouseout`이벤트를 부여하여 마우스가 해당영역에 들어갔다 나올때마다 `hidden`속성을 제거했다 부여하는 방식으로 구현합니다.

### 기능 : 스크롤 navigation

![헤더-스크롤네비](https://github.com/Rbochill/Rbochill/assets/105577805/c000fb7c-fa44-40a0-a1d3-83284dc14a52)

```js
function changeNavigation(navOrigin, navScroll) {
	const scrollPosition = window.scrollY;
	const headerWrapper = getNode('.headerWrapper');
	const targetHeaderPosition = headerWrapper.getBoundingClientRect().bottom + window.scrollY;

	if (scrollPosition >= targetHeaderPosition) {
		navOrigin.classList.add('hidden');
		navScroll.classList.remove('hidden');
	} else {
		navOrigin.classList.remove('hidden');
		navScroll.classList.add('hidden');
	}
}
```

- `window.scrollY`와 `getBoundingClientRect`로 navigation의 레이아웃이 변할 위치 값을 찾습니다. 해당 위치에 도달하면 다른 레이아웃의 네비게이션이 보이고 기존 네비게이션은 숨기도록 `hidden` 속성을 부여하거나 제거합니다.

## 코드리뷰 | 장바구니

![장바구니-가격](https://github.com/Rbochill/Rbochill/assets/105577805/33772342-19a4-4c41-b986-a91c1e3b6b80)
![장바구니-로컬스토리지](https://github.com/Rbochill/Rbochill/assets/105577805/3ccac132-de20-4436-ba3e-aa4601bb7128)

### 기능 : 상품 랜더링

- 사용자가 장바구니에 상품을 추가하면 로컬 스토리지와 데이터 베이스에 상품의 id와 선택한 수량이 저장됩니다.
- 로컬스토리지에 저장하면 비회원 사용자도 카트를 이용할 수 있으며, 사용자가 창을 껐다 켜도 카트 정보를 다시 불러 올 수 있습니다.
- 장바구니 화면을 랜더링할 때 로컬스토리지에 있는 cart의 정보를 `storage.getItem()`으로 가져옵니다.
- 데이터 베이스에서 `await`을 사용하여 상품 정보를 모두 가져옵니다

```js
const getLocalCartList = (() => {
	if (!localCartList) return;
	const userCartItemIds = Object.keys(JSON.parse(localCartList)); // 로그인 유저의 카트 아이템ID (배열)
	const userCartItemData = dbProductData.filter((item) => userCartItemIds.includes(item.id)); // 카트에 담긴 아이템의 객체 정보(배열)
	return userCartItemData;
})();
```

- 가져온 데이터 베이스에서 `filter`와 `include`를 사용해 cart의 id와 일치하는 상품의 값만 배열로 반환 받습니다.

```js
const renderCartList = (() => {
	if (!getLocalCartList) return;
	getLocalCartList.forEach((item) => {
		let {
			id,
			type,
			name,
			price,
			salePrice,
			stock,
			image: {thumbnail},
		} = item;
  }
```

- 해당 배열에 `foreach`문을 사용합니다. `foreach`문 내에서 구조분해 할당으로 각 상품별로 정보를 분리합니다.
- 분리한 정보 `type`과 `salePrice`를 이용합니다.
- `salePrice` 값이 0인지 여부에 따라 다른 템플릿을 사용합니다. 세일값이 0보다 크다면 `price`값만 랜더링하고, 작다면 `salePrice`도 함께 랜더링 합니다.

```js
const refrigerCart = getNode('.refrigerCart');
const frozenCart = getNode('.frozenCart');
const ambientCart = getNode('.ambientCart');

// # 상품의 type 체크하여 해당 카테고리 node 반환
function checkCartProductType(type) {
	switch (type) {
		case 'ambient':
			return ambientCart;
			break;
		case 'frozen':
			return frozenCart;
			break;
		case 'refriger':
			return refrigerCart;
			break;
	}
}

insertLast(checkCartProductType(type), cartTemplate);
```

- 상품의 `type`에 따라 랜더링할 위치를 '냉장', '냉동', '상온'으로 나누어 랜더링 합니다.

### 기능 : 상품 수량 변화

```js
let target = e.target;
const findButton = (target) => target.closest('button');
```

- 장바구니 상품 리스트 영역에 `addEventListener`로 `click`이벤트를 부여합니다.
- `e.target.closest`로 이벤트 위임을 하여 클릭되는 버튼을 찾습니다.

```js
// # 버튼 클릭시 input 증감 후 반환
function handleCount(node, value, input) {
	let firstValue = +value;

	if (hasClassName(node, 'cartCountUp')) {
		firstValue++;
	} else if (hasClassName(node, 'cartCountDown') && firstValue > 0) {
		firstValue--;
	}
	input.value = firstValue;
	return firstValue;
}
```

- `handleCount()` 함수의 매개변수에는 차례로 클릭되는 버튼, 장바구니가 랜더링 될 때 담긴 수량,변화된 값을 넣어줄 input이 들어 갑니다.

```js
// # 특정 class name이 포함되어 있는지 찾기
const hasClassName = (node, name) => node.classList.contains(name);
```

- 마크업 시 - 버튼과 + 버튼 각각에 특정한 클래스 네임을 부여합니다.
  `hasClassName()`함수를 사용하여 어떤 클래스 네임을 가졌는지에 따라 input에 넣을 값을 더하거나 뺍니다.
- 값을 뺄 때에는 수량이 0이하로 내려갈 수 없도록 `handleCount()`의 조건식에 input의 값이 0 이상이 될 때만 값을 빼도록 합니다.
- 변화된 값을 `input.value`에 넣어 랜더링 되도록 합니다.

```js
// 로컬스토리지에 변화하는 숫자 push
const copyList = {...localCartItems};
copyList[productId] = resultCount;
saveStorage('cart', copyList);
```

- 변화된 수량은 로컬스토리지의 cart 정보에도 반영시킵니다. 이로인해 사용자가 창을 껐다 키거나 비회원인 상태에서도 장바구니에 담긴 상품을 볼 수 있습니다.

### 수량 변화에 따른 가격 변화

```js
// input 잡기
const findButton = (target) => target.closest('button');
if (!findButton(target)) return;
const findParent = findButton(target).parentNode;
const findInput = findParent?.childNodes[5];
const findInputValue = findInput?.value;
if (!findInputValue) return;

// input의 data-id 찾기
const productId = attr(findInput, 'data-id');
if (!productId) return;
```

- 각 상품의 리스트가 랜더링 될 때 해당 상품의 id값이 `input`의 `dataset`으로 들어가도록 템플릿하였습니다.
- 변화하는 `input`의 값을 잡기 위해 클릭하는 버튼의 부모를 찾고 부모의 `input` 자식을 찾습니다.

```js
// data-id로 데이터베이스에서 정상가, 할인가 가져오기
const userCartItemData = dbProductData.filter((item) => productId.includes(item.id)); // 해당하는 상품의 데이터베이스 정보 추출
const nomalCost = userCartItemData[0].price; // 데이터베이스 정보에서 정상가 추출
const saleCost = userCartItemData[0].salePrice; // 데이터베이스 정보에서 세일가 추출
```

- `input`의 id 값으로 해당 리스트의 가격 정보를 데이터 베이스에 찾습니다.
- 찾아온 가격 정보를 숫자로 변환하여 계산합니다.
- `document.querySelector`를 사용하여 값을 넣을 영역을 잡아 각 값을 넣어 줍니다.

## 코드리뷰 | 회원가입

![회원가입](https://github.com/Rbochill/Rbochill/assets/105577805/8db4f433-80c1-4fa0-a871-69a25906398b)

### 회원가입

1. 아이디, 비밀번호, 이메일 : 정규식으로 입력 양식을 구성함<br>
2. 휴대폰, 생년월일 : replace, slice 메서드로 숫자만 입력 되도록 하고 글자 수를 제한함<br>

```js
function handlePhone(event) {
	this.value = this.value.replace(/[^0-9.]/g, '');
	const maxLength = 11;
	const input = event.target;
	const value = input.value;

	if (value.length > maxLength) {
		input.value = value.slice(0, maxLength);
	}
}
```

### 가입하기

1. 비교 연산자로 필수 항목이 모두 입력되었는지 확인
2. 랜덤 함수로 unique id를 생성
3. setItem 메서드로 로컬 스토리지에 저장
4. async, await을 이용하여 유저의 정보를 서버에 전송

```js
const uniqueId = Math.random().toString(36).substring(2, 11);

storage.setItem('userId', inputIdValue);
storage.setItem('password', inputPw1Value);
storage.setItem('uniqueId', uniqueId);

tiger.post('http://localhost:3000/users', {
	userId: inputIdValue,
	password: inputPw1Value,
	uniqueId: uniqueId,
});
```

## 코드리뷰 | 로그인

![로그인 페이지](https://github.com/Rbochill/Rbochill/assets/105577805/09f065d1-ab7f-4d1c-9139-f2dc9ae34ff8)

1. async, await을 이용하여 유저의 정보를 서버로부터 수신<br>
2. 사용자가 입력한 데이터와 서버에서 가져온 id, password를 1차 비교<br>
3. 로컬 스토리지의 unique id와 서버의 unique id를 2차로 비교하고 로그인<br>

```js
async function handleLogin(e) {
	const {localStorage: storage} = globalThis;
	e.preventDefault();

	let response = await fetch('http://localhost:3000/users');
	let users = await response.json();

	const usersInform = users.find((item) => {
		return item.userId === inputId.value;
	});

// ...
		if (id === getUserId && pw === getUserPw) {
			const localUniqueId = storage.getItem('uniqueId');
			if (usersInform.uniqueId === localUniqueId) {
				window.location.href = '/index.html';

```

<br>

## 코드리뷰 | 상품 상세

![상품렌더링](https://github.com/dongapple/EXAMPLE/assets/74224516/a8d4bd97-098f-45e7-b3e4-3c117c4e313f)

###  기능 : 상품 렌더링

```js
async function renderProductPage() {
	try {
		const Url = 'http://localhost:3000/';

		const productId = localStorage.getItem('clickProduct');
		// console.log(productId);
``
		const responseData = await tiger.get(Url + 'products');
		const productData = responseData.data;
		const targetIndex = productData.findIndex((item) => item.id === productId);

		const productElements = {...};

		const pagesToRender = [...];

		pagesToRender.forEach((pageElem) => {
			renderDataProductPage(pageElem.element, pageElem.type, productData[targetIndex]);
		});
	}
}

```
- renderProductPage(): 상품 상세 페이지를 렌더링합니다. 렌더링할 페이지의 컨텐츠를 정의한 pagesToRender 배열을 기반으로 Product Info, Product Detail, Product Review, Product Q&A 및 Base 정보를 렌더링합니다.
- Url: API 요청을 위한 기본 URL입니다. 상품 데이터를 가져오는 데 사용됩니다.
- productId: 이전 페이지에서 클릭한 상품의 ID를 localStorage에서 가져옵니다. 이 정보를 사용하여 클릭한 상품의 정보를 가져옵니다.
- responseData: API를 통해 상품 목록을 가져오는 것이 성공하면 응답 데이터를 저장합니다.
- productData: 응답 데이터에서 상품 데이터만 추출합니다.
- targetIndex: 클릭한 상품의 ID와 일치하는 상품 데이터의 인덱스를 찾습니다. 해당 인덱스를 사용하여 상품 상세 페이지에 필요한 데이터를 가져올 수 있습니다.
- productElements: 상품 상세 페이지에 필요한 각 섹션에 해당하는 HTML 요소들을 구성합니다.
- pagesToRender: 각 섹션에 대한 정보를 배열로 저장합니다. 각 요소에는 렌더링할 요소와 유형이 포함됩니다.
- pagesToRender.forEach: pagesToRender의 각 요소에 대해 renderDataProductPage 함수를 호출하여 페이지를 렌더링합니다. 이렇게 하면 코드에서 요소의 순서를 변경하거나 새로운 요소를 추가할 때 코드를 쉽게 유지할 수 있습니다.




###  기능 : 페이지 스크롤 이동 버튼
```js

// # scrollPage 네비게이션 고정
window.addEventListener('scroll', () => {
	const moveButtonGroup = $('.moveButtonGroup');
	changeButtonColor();
	if (window.pageYOffset > moveButtonGroup.offsetTop) {
		moveButtonGroup.classList.add('sticky');
	} else {
		moveButtonGroup.classList.remove('sticky');
	}
});

// # 네비게이션 색 바꾸기
function changeButtonColor() {
	const scrollPosition = window.scrollY;

	const productNavInfo = [
		{id: 'toProductInfo', buttonId: 'GoProductInfo'},
		{id: 'toProductDetail', buttonId: 'GoProductDetail'},
		{id: 'toProductReview', buttonId: 'GoProductReview'},
		{id: 'toProductQna', buttonId: 'GoProductQna'},
	];

	productNavInfo.forEach((nav, index) => {
		const targetElem = document.getElementById(nav.id);
		const buttonElem = document.getElementById(nav.buttonId);

		const targetTop = targetElem.getBoundingClientRect().top + window.scrollY - 50;
		const targetNextTop =
			productNavInfo.length !== index + 1 // 만약 마지막 요소가 아니면, 다음 요소의 탑 값을 얻고, 아니면 null.
				? document.getElementById(productNavInfo[index + 1].id).getBoundingClientRect().top + window.scrollY - 50
				: null;

		if (scrollPosition >= targetTop && (targetNextTop === null || scrollPosition < targetNextTop)) {
			resetNavButtons();
			buttonElem.style.backgroundColor = '#5f0080';
			buttonElem.style.color = '#ffffff';
		}
	});

	function resetNavButtons() {
		productNavInfo.forEach((nav) => {
			const buttonElem = document.getElementById(nav.buttonId);
			buttonElem.style.backgroundColor = '#ffffff';
			buttonElem.style.color = '#000000';
		});
	}
}

```

- changeButtonColor(): scroll event 리스너가 실행될 때 호출되며, 해당 위치에 맞게 네비게이션 색상을 변경합니다.
- scrollPosition: 현재 화면의 스크롤 위치입니다(window.scrollY).
- productNavInfo: 내비게이션 및 버튼 요소의 id 정보를 갖고 있는 객체 배열입니다.
- productNavInfo.forEach: productNavInfo의 모든 객체를 반복하여 버튼 색상을 변경해야 하는지 확인하고, 필요한 경우 색상을 변경합니다.
- targetElem과 buttonElem: 각각 내비게이션에 대한 요소와 버튼 요소를 가져옵니다.
- targetTop과 targetNextTop: 각각 해당 내비게이션 요소의 top 위치와 다음 내비게이션 요소의 top 위치를 계산합니다. 여기서 마지막 요소는 다음 요소가 없으므로, targetNextTop 값은 null로 처리됩니다.
- if (scrollPosition >= targetTop && (targetNextTop === null || scrollPosition < targetNextTop)): 스크롤 위치가 현재 내비게이션 범위 내에 있으면, 특히 스크롤 위치가 현재 대상 이상(targetTop 이상)이고, 다음 대상 이상 (targetNextTop 이상)이거나, 다음 대상이 없는 경우(null) 버튼의 배경색과 글자색을 변경하게 됩니다.
- resetNavButtons: 모든 내비게이션 버튼의 배경색과 글자색을 초기 상태로 변경하는 함수입니다. 만약 현재 내비게이션 요소가 아닌 다른 요소에 스크롤이 있을 때, 변경된 버튼의 색상을 원래대로 돌릴 필요가 있기 때문에 이 함수를 호출하여 초기화합니다.

## 코드리뷰 | footer

![푸터](https://github.com/dongapple/EXAMPLE/assets/74224516/e25d98a9-d6ef-4ee5-b437-a6056426e2af)

- 기본적인 정보를 입력.
- 페이스북, 블로그 등 버튼을 누르면 해당 페이지로 이동

</br>

# 🔎 문법 검사

구현한 페이지들에 문법 검사를 시행한 결과 에러가 없음을 확인합니다.

### 메인

<img width="1055" alt="main" src="https://github.com/Rbochill/Rbochill/assets/105577805/89e59699-083c-433e-b881-8cee048cafcc">

### 로그인

<img width="1047" alt="login" src="https://github.com/Rbochill/Rbochill/assets/105577805/a1e4faed-46ed-44ac-ab73-055f5a9f57b7">

### 회원가입

<img width="1043" alt="join" src="https://github.com/Rbochill/Rbochill/assets/105577805/96909b6c-61ed-4d4e-bb0c-ad45e8c148eb">

### 재품 상세 페이지

<img width="1043" alt="detail" src="https://github.com/Rbochill/Rbochill/assets/105577805/31ad6740-8fa8-4ecc-be6b-eecf4325b126">

### 장바구니

<img width="1041" alt="cart" src="https://github.com/Rbochill/Rbochill/assets/105577805/4d17d63b-05de-44ad-8824-b13f735df419">

</br>

# 💻 크로스 브라우징

각 모던 브라우저 Chrome, Firefox, Safari, Edge 환경에 맞춰 구현됨을 확인합니다.
| <img width="15" alt="browsers-chrome" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/5cde8ef4-6f95-4806-a289-b82b92da4ea6"> **Chrome** | <img width="15" alt="browsers-firefox" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/b90bf217-6fe6-414b-a769-dd7e7339a4a4"> **FireFox** |
|:-:|:-:|
| <img width="150px" height="300px" src="https://github.com/Rbochill/Rbochill/assets/105577805/ae8c171d-7f47-4efc-b433-c0144a1e7933" style="padding:0" /> | <img width="150px" height="300px" src="https://github.com/Rbochill/Rbochill/assets/105577805/10575da2-ef74-4268-8507-e2e47e934fa0" /> |

| <img width="15" alt="browsers-safari" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/ba710b63-897c-46fc-977f-21c63bb0c3db"> **Safari** | <img width="15" alt="browsers-edge" src="https://github.com/M-Moong/ID-NUMBER/assets/105577805/fa7338c3-a674-43c1-9e6b-767d2b336228"> **Edge** |
| :------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------: |
|       <img width="150px" height="300px" src="https://github.com/Rbochill/Rbochill/assets/105577805/b99adb33-f6da-48b6-8441-118ed0436ba9" />        |     <img width="150px" height="300px" src="https://github.com/Rbochill/Rbochill/assets/105577805/736ac39d-ff3e-4199-ad3a-06002ec0df35" />      |

</br>

# 🎤 프로젝트 소감

| 이름           | 소감                                                                                                                                                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 신승민(팀장)🐧 | 프로젝트를 통해 HTML과 CSS, Javascript 대해 좀더 고민할수 있는 시간을 가져서 좋았습니다. 그리고 다른 사람들과 하는 협업에 대해 많이 배운것 같습니다.                                                                                                                                             |
| 김다인🐻‍❄️       | 함께했기에 무사히 완주할 수 있었습니다. 기능 구현에 좌절할 때마다 다 왔다고 할 수 있다고 독려해 준 동료들 덕분에 포기하지 않고 무사히 마쳤습니다. 제한 시간 내에 원하던 기능을 모두 구현할 수는 없었지만, 후회 없이 마무리할 수 있었습니다. 한 달 같은 일주일을 함께 해준 조원들에게 감사합니다. |
| 신동혁🐳       | 정말 팀원의 중요성은 무엇보다도 중요하다고 느꼈습니다 모두가 같이 동시간때에 밤을 새워가며 끝까지 완주해주셔서 감사합니다 기초 설계가 정말 중요하다고 몇번이고 느끼게 되었다. 초반에 설계가 미흡하면 나중에 수정을 반복하게 되고 공동작업으로 이뤄지기 때문에 푸쉬 풀을 하며 충돌이 많이 발생하는 부분을 후회하게 되었다.                                                                                                                                                                                                                                                                                               |
| 정소희🐼       | 완전한 기능을 구현한건 아니지만 html,css 프로젝트 때와는 달리 동적인 웹 페이지를 만들 수 있어서 프론트엔드 개발에 한걸음 더 다가가는 계기가 되었다고 생각합니다. 많이 부족하지만 경험을 쌓아 한 몫을 제대로 해내고 싶습니다. 팀원들 덕분에 힘을 내서 무사히 마칠 수 있었습니다. 감사합니다.      |
