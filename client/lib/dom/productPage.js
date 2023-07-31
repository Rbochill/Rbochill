import {insertLast} from './insert.js';

// const datalist = {
// 	// id = '',
// 	name = "상품이름",
// 	description = '상품설명',
// 	price = "가격",
// 	image = {thumbnail: 'FrozenPork/thumbnail.jpg', view: 'FrozenPork/detail_view.jpg', banner: 'FrozenPork/detail_banner.jpg', info: 'FrozenPork/detail_info.jpg', alt: '한돈 급냉 삼겹살 600g'},
// 	// saleRatio =  0.25,
// 	// salePrice = 3375,
// };
// # 렌더링 HTML 코드
function createProductBase({
	// id = '',
	name = '상품이름',
	description = '상품설명',
	price = '가격',
	image = {thumbnail: 'FrozenPork/thumbnail.jpg', view: 'FrozenPork/detail_view.jpg', banner: 'FrozenPork/detail_banner.jpg', info: 'FrozenPork/detail_info.jpg', alt: '한돈 급냉 삼겹살 600g'},
	// saleRatio =  0.25,
	// salePrice = 3375,
}) {
	const template = /* html */ `
  
				
				<!-- 왼쪽 이미지 -->
				<img class="h-[514px] w-[400px]" alt="상품 이미지" src="/assets/images/product/${image.thumbnail}" />
				<!-- 오른쪽 정보 -->

				<div class="w-[560px]">
					<!-- 제목 -->
					<div class="flex flex-col gap-[16px] pb-[20px]">
						<div class="flex flex-col gap-[4px]">
							<h2 class="text-xl font-semibold text-content">${name}</h2>
							<p class="text-gray/400">${description}</p>
						</div>
						<strong class="order-first text-xl text-gray/500">샛별배송</strong>
						<h3 class="text-xl font-semibold">${price.toLocaleString()}<span class="text-base">원</span></h3>
						<!-- <p>10,500원</p> -->
						<p class="text-base font-semibold text-primary">로그인후 적립혜택이 제공 됩니다.</p>
					</div>

					<!-- 상품정보 -->
					<div>
						<h3 class="sr-only">상품 간단정보</h3>
						<dl class="flex border-b-[1px] border-t-[1px] border-solid border-gray/100 py-[16px]">
							<dt class="basis-[128px] text-sm font-semibold text-gray/500">배송</dt>
							<dd class="grow text-sm font-semibold text-gray/500">
								<p>샛별배송</p>
								<p class="text-gray/400">23시 전 주문 시 내일 아침 7시 전 도착 <br />(대구 부산 울산 샛별배송 운영시간 별도 확인)</p>
							</dd>
						</dl>
						<dl class="flex border-b-[1px] border-solid border-gray/100 py-[16px]">
							<dt class="basis-[128px] text-sm font-semibold text-gray/500">판매자</dt>
							<dd class="gro text-sm font-semibold text-gray/500">컬리</dd>
						</dl>
						<dl class="flex border-b-[1px] border-solid border-gray/100 py-[16px]">
							<dt class="basis-[128px] text-sm font-semibold text-gray/500">포장타입</dt>
							<dd class="grow text-sm font-semibold text-gray/500">
								<p>상온 (종이포장)</p>
								<p class="text-gray/400">택배배송은 에코 포장이 스티로폼으로 대체됩니다.</p>
							</dd>
						</dl>
						<dl class="flex border-b-[1px] border-solid border-gray/100 py-[16px]">
							<dt class="basis-[128px] text-sm font-semibold text-gray/500">판매단위</dt>
							<dd class="grow text-sm font-semibold text-gray/500">1봉</dd>
						</dl>
						<dl class="flex border-b-[1px] border-solid border-gray/100 py-[16px]">
							<dt class="basis-[128px] text-sm font-semibold text-gray/500">중량/용량</dt>
							<dd class="grow text-sm font-semibold text-gray/500">123g*4봉</dd>
						</dl>
						<dl class="flex border-b-[1px] border-solid border-gray/100 py-[16px]">
							<dt class="basis-[128px] text-sm font-semibold text-gray/500">원산지</dt>
							<dd class="grow text-sm font-semibold text-gray/500">상세페이지 별도표기</dd>
						</dl>

						<dl class="flex border-b-[1px] border-solid border-gray/100 py-[16px]">
							<dt class="basis-[128px] text-sm font-semibold text-gray/500">알레르기정보</dt>
							<dd class="basis-[432px] text-sm font-semibold text-gray/500">
								<p>-대두, 밀, 쇠고기 함유</p>
								<p>-계란, 우유, 메밀, 땅콩, 고등어, 게, 돼지고기, 새우, 복숭아, 토마토, 아황산류, 호두, 잣, 닭고기, 오징어, 조개류(굴, 전복, 홍합 포함)를 사용한 제품과 같은 제조시설에서 제조</p>
							</dd>
						</dl>
						<dl class="flex border-b-[1px] border-solid border-gray/100 py-[16px]">
							<dt class="basis-[128px] text-sm font-semibold text-gray/500">상품선택</dt>
							<dd class="grow">
								<div class="pxl-[12px] relative flex flex-col gap-1 border-[1px] border-solid border-gray/100 py-[12px] pl-[16px] pr-[12px]">
									<p class="text-sm font-semibold text-gray/500">${name} (4개입)</p>
									<div class="flex h-[30px] w-[84px] gap-[8px] border-[1px] border-solid border-gray/200">
										<button class="w-[30px]" type="button" aria-label="수량 빼기">-</button>
										<span class="font-semibold">0</span>
										<button class="w-[30px]" type="button" aria-label="수량 더하기">+</button>
									</div>
									<p class="absolute bottom-[12px] right-[12px] text-sm font-semibold"><del class="text-gray/500">기존금액</del> 최종금액</p>
								</div>
							</dd>
						</dl>
						<div class="py-[28px] text-right">
							<p class="font-semibold">총 상품금액<span class="pl-[17px] text-xl text-content">4,980</span>원</p>
							<p class="font-semibold"><span class="mr-[6px] rounded-xl bg-accent/yellow px-[8px] py-[4px] text-sm text-white">적립</span>로그인 후, 적립 혜택 제공</p>
						</div>

						
					</div>
				</div>
			
 
`;

	return template;
}
function createProductDetail({
	// id = '',
	name = '상품이름',
	description = '상품설명',
	price = '가격',
	image = {thumbnail: 'FrozenPork/thumbnail.jpg', view: 'FrozenPork/detail_view.jpg', banner: 'FrozenPork/detail_banner.jpg', info: 'FrozenPork/detail_info.jpg', alt: '한돈 급냉 삼겹살 600g'},
	// saleRatio =  0.25,
	// salePrice = 3375,
}) {
	const template = /* html */ `
  
  <!-- 베너 이미지 -->
	<img class="w-full" alt="상품베너이미지" src="/assets/images/product/${image.banner}" />
	<!-- 간단설명 -->
	<div class="flex flex-col items-center">
		<p class="text-[28.43px] font-semibold">${description}</p>
		<p class="pb-[36px] text-[50.517px] font-bold text-content">${name}</p>
		<p class="w-full pt-[26px]">
			쫄면의 진가는 매콤새콤한 양념과 탱탱한 면발에서 찾을 수 있지요. 풀무원은 이 맛을 더 부담 없이 즐길 수 있도록 튀기지 않고 만든 탱탱쫄면을 선보입니다. 밀가루와 감자 전분을 적절히 배합해
			탄력이 좋고, 입에 넣었을 때는 찰지게 씹히죠. 고추장을 넣어 숙성한 비빔장은 자연스럽고 깊은 맛을 냅니다. 간단하게 조리해 마지막 한 가닥까지 탱탱한 식감을 즐겨보세요. 취향에 따라 다양한
			고명을 올려 드셔도 좋아요.
		</p>
	</div>
	<!-- 체크 포인트 -->
	<div>
		<p class="sr-only">Karly's Check Point</p>
		<img class="w-full" alt="체크포인트" src="/assets/images/product-detail/goods-point.png" />
	</div>
	<!-- 컬리노트 -->
	<div class="flex flex-col items-center">
		<p class="pb-[36px] text-[50.517px] font-bold text-content">Kurly’s Note</p>
		<img class="w-full" alt="컬리노트" src="/assets/images/product/${image.view}" />
	</div>
`;

	return template;
}
function createProductInfo({
	// id = '',
	name = '상품이름',
	description = '상품설명',
	price = '가격',
	image = {thumbnail: 'FrozenPork/thumbnail.jpg', view: 'FrozenPork/detail_view.jpg', banner: 'FrozenPork/detail_banner.jpg', info: 'FrozenPork/detail_info.jpg', alt: '한돈 급냉 삼겹살 600g'},
	// saleRatio =  0.25,
	// salePrice = 3375,
}) {
	const template = /* html */ `
	<img class="w-full" alt="상품베너이미지" src="/assets/images/product/${image.info}" />
`;

	return template;
}
function createProductReview({
	// id = '',
	name = '상품이름',
	description = '상품설명',
	price = '가격',
	image = {thumbnail: 'FrozenPork/thumbnail.jpg', view: 'FrozenPork/detail_view.jpg', banner: 'FrozenPork/detail_banner.jpg', info: 'FrozenPork/detail_info.jpg', alt: '한돈 급냉 삼겹살 600g'},
	// saleRatio =  0.25,
	// salePrice = 3375,
}) {
	const template = /* html */ `
  
	<div class="border-t-[1px]">
		<div class="flex h-[58px] items-center border-b-[1px] border-gray/100 px-[20px]">
			<p class="font-semibold"><span class="mr-[20px] rounded-xs bg-gray/100 px-[8px] text-sm">공지</span>금주의 베스트 후기 안내</p>
		</div>
		<div class="flex gap-[82px] border-b-[1px] border-gray/100 p-[20px]">
			<div class="flex h-[18px] flex-row flex-wrap gap-[8px]">
				<span class="rounded-xs bg-secondary px-[8px] text-sm font-semibold text-white">베스트</span>
				<span class="rounded-xs border-[1px] px-[8px] text-sm font-semibold text-primary">퍼플</span>
				<span class="text-sm font-semibold">홍길동</span>
			</div>
			<div class="flex flex-col gap-[20px]">
				<p class="text-sm font-semibold text-gray/400">${name} (4개입)</p>
				<p class="text-sm">너무 맛있어여면이 쫄깃하고 양념도 짱맛나요!!</p>
				<time class="text-sm font-semibold text-gray/400" datetime="2022-11-10T20:00:00">2022.11.10</time>
			</div>
		</div>
	</div>
	<!-- 버튼 -->
	<div class="mx-auto">
		<button class="h-[56px] w-[56px] place-content-center rounded-sm border-[1px] border-solid border-gray/100" type="button" aria-label="관심품목">
			<img alt="이전" class="mx-auto" src="/assets/images/product-detail/arrow-left.svg" />
		</button>
		<button class="h-[56px] w-[56px] place-content-center rounded-sm border-[1px] border-solid border-gray/100" type="button" aria-label="관심품목">
			<img alt="다음" class="mx-auto" src="/assets/images/product-detail/arrow-right.svg" />
		</button>
	</div>
	`;

	return template;
}
function createProductQna({
	// id = '',
	name = '상품이름',
	description = '상품설명',
	price = '가격',
	image = {thumbnail: 'FrozenPork/thumbnail.jpg', view: 'FrozenPork/detail_view.jpg', banner: 'FrozenPork/detail_banner.jpg', info: 'FrozenPork/detail_info.jpg', alt: '한돈 급냉 삼겹살 600g'},
	// saleRatio =  0.25,
	// salePrice = 3375,
}) {
	const template = /* html */ `
  	<!-- 상품문의 & 버튼 -->
		<div class="relative">
		<p class="text-xl font-bold">상품문의</p>
		<ol class="ml-[10px] mt-[24px] list-inside list-disc text-sm text-gray/500">
			<li>상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.</li>
			<li>배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내 1:1 문의에 남겨주세요.</li>
		</ol>

		<button class="absolute right-0 top-0 h-[44px] w-[155px] rounded-sm bg-primary font-semibold text-white" type="button" aria-label="문의하기 버튼">문의하기</button>
	</div>
	<div>
		<div class="felx-row flex h-[58px] items-center justify-between border-b-[1px] border-t-[2px] font-semibold">
			<p class="grow text-center">제목</p>
			<p class="w-[100px] text-center">작성일</p>
			<p class="w-[100px] text-center">작성자</p>
			<p class="w-[100px] text-center">답변상태</p>
		</div>
		<div class="felx-row flex h-[58px] items-center justify-between border-b-[1px] border-t-[2px] font-semibold">
			<p class="grow font-semibold"><span class="mr-[20px] rounded-xs bg-gray/100 px-[8px] text-sm">공지</span>판매(일시)중단 제품 안내 (22.11.10 업데이트)</p>
			<p class="w-[100px] text-center">칼리</p>
			<time class="w-[100px] text-center" datetime="2022-11-10T20:00:00">2022.11.10</time>
			<p class="w-[100px] text-center">-</p>
		</div>
	</div>
				
				
 
`;

	return template;
}

export function createEmptyProductPage(errorMessage = '알 수 없는 에러가 발생했습니다.') {
	return /* html */ `
  <div class="emptyProductPage">
  </div>
  <figcaption>${errorMessage}</figcaption>
  `;
}

// # 페이지 렌더러
export function renderDataProductPage(target, swich, data) {
	switch (swich) {
		case 'base':
			insertLast(target, createProductBase(data));
			break;
		case 'info':
			insertLast(target, createProductInfo(data));
			break;
		case 'detail':
			insertLast(target, createProductDetail(data));
			break;
		case 'review':
			insertLast(target, createProductReview(data));
			break;
		case 'qna':
			insertLast(target, createProductQna(data));
			break;
	}
}

export function renderEmptyProductPage(target) {
	insertLast(target, createEmptyProductPage());
}
