import {insertLast} from './insert.js';

function createProductPage({
	// id = '',
	name = "[Kalry's] 한돈 삼겹 베이컨",
	description = '무항생제 한돈 삼겹살의 고소한 풍미 그대로',
	price = 4500,
	image = {thumbnail: 'FrozenPork/thumbnail.jpg', view: 'FrozenPork/detail_view.jpg', banner: 'FrozenPork/detail_banner.jpg', info: 'FrozenPork/detail_info.jpg', alt: '한돈 급냉 삼겹살 600g'},
	// saleRatio =  0.25,
	// salePrice = 3375,
}) {
	const template = /* html */ `
  <!-- 왼쪽 이미지 -->
  <div class=" mt-[40px] flex justify-between">
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
        <h3 class="text-xl font-semibold">${price}<span class="text-base">원</span></h3>
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

        <div class="flex flex-row gap-[12px]">
          <button class="h-[56px] w-[56px] place-content-center rounded-sm border-[1px] border-solid border-gray/100" type="button" aria-label="관심품목">
            <img
              alt="관심품목"
              class="mx-auto"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K"
            />
          </button>
          <button class="h-[56px] w-[56px] place-content-center rounded-sm border-[1px] border-solid border-gray/100" type="button" aria-label="알림설정">
            <img
              alt="알림설정"
              class="mx-auto"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
            />
          </button>
          <button class="h-[56px] grow place-content-center rounded-sm bg-primary font-semibold text-white" type="button" aria-label="장바구니담기">장바구니 담기</button>
        </div>
      </div>
    </div>
  </div>
  
				<!-- 네비게이션 -->
				<div class="mx-auto mt-[48px] flex w-[1050px] justify-between">
					<div class="w-full">
						<button class="font-base h-[54px] w-full content-center border-x-[1px] border-t-[1px] border-solid border-gray/100 font-semibold text-primary" type="button" aria-label="상품설명">
							상품설명
						</button>
					</div>
					<div class="w-full">
						<button class="font-base h-[54px] w-full border-[1px] border-solid border-gray/300 font-semibold text-content" type="button" aria-label="상세정보">상세정보</button>
					</div>
					<div class="w-full">
						<button class="font-base h-[54px] w-full border-[1px] border-solid border-gray/300 font-semibold text-content" type="button" aria-label="후기">
							후기 <span class="text-sm">(1,000)</span>
						</button>
					</div>
					<div class="w-full">
						<button class="font-base h-[54px] w-full border-[1px] border-solid border-gray/300 font-semibold text-content" type="button" aria-label="문의">문의</button>
					</div>
				</div>

				<!-- 상품설명 -->
				<section class="flex flex-col gap-[96px] pb-[96px] pt-[40px]">
					<h2 class="sr-only">상품설명</h2>
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
				</section>

				<!-- 상세정보 -->
				<section>
					<h2 class="sr-only">상세정보</h2>
					<img class="w-full" alt="상품베너이미지" src="/assets/images/product/${image.info}" />
				</section>

				<!-- 후기 -->
				<section class="flex flex-col gap-[56px]">
					<!-- 상품 후기 &버튼 -->
					<h2 class="sr-only">상품후기</h2>
					<div class="relative">
						<p class="text-xl font-bold">상품후기</p>
						<p class="mt-[24px] font-semibold text-content">글후기 50원 적립금 혜택이 있어요.</p>
						<ol class="ml-[10px] list-inside list-disc text-sm text-gray/500">
							<li class="">퍼플, 더퍼플은 2배 적립 (100원) / 주간 베스트 후기로 선정 시 5,000원 추가 적립</li>
							<li>작성은 배송완료일로부터 30일 이내 가능합니다.</li>
							<li>작성하신 후기는 확인 후 적립금이 지급됩니다. (영업일 기준 평균 1~2일 소요)</li>
						</ol>
						<button class="absolute right-0 top-0 h-[44px] w-[155px] rounded-sm bg-primary font-semibold text-white" type="button" aria-label="후기 작성하 버튼">후기 작성하기</button>
					</div>

					<div class="flex flex-col gap-[16px]">
						<!-- 필터 -->
						<div class="flex justify-between">
							<p class="text-sm font-semibold text-content">총 n개</p>
							<div class="font-semibold text-gray/300">
								<button class="text-content" type="button" aria-label="후기 작성하기">추천순</button>
								<span> | </span>
								<button type="button" aria-label="후기 작성하기">최근등록순</button>
							</div>
						</div>
						<!-- 공지 -->

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
					</div>
				</section>

				<!-- 문의 -->
				<section class="flex flex-col gap-[56px]">
					<h2 class="sr-only">상품문의</h2>
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
				</section>
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

export function renderDataProductPage(target, data) {
	insertLast(target, createProductPage(data));
}

export function renderEmptyProductPage(target) {
	insertLast(target, createEmptyProductPage());
}
