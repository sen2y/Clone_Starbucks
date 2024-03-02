const searchEl = document.querySelector(".search");
// 효율적으로 찾기 위해 querySelector 대신 searchEl에서 찾는다.
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  // Logic...
  searchInputEl.focus(); // focus() : input에 커서를 두는 메소드
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  // focus가 해제되면
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector(".header .badges");
const toTopEl = document.querySelector("#to-top");

// throttle : 일정 시간 간격을 두고 이벤트가 연속해서 발생하는 것을 제한하는 기능
// 일정시간에 한번씩만 호출되도록 설정
// _.throttle(함수, 시간)
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log("scroll!");
    if (window.scrollY > 500) {
      // 배지 숨기기
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0, // 이것만 추가하면, 사라지기만 하고, 자리는 남아있다.
        display: "none", // 이것을 추가하면, 사라지면서 자리도 사라진다. 투명도가 0이되면 그이후 display:none으로 바뀐다.
      });
      // 버튼 보이기
      // gsap.to("#to-top", 0.2, { // 요소대신 선택자를 바로 넣을 수도 있다.
      gsap.to(toTopEl, 0.2, {
        x: 0, // 요소의 원래 위치로 이동
      });
    } else {
      // 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 버튼 숨기기
      // gsap.to("#to-top", 0.2, {
      gsap.to(toTopEl, 0.2, {
        x: 100, // 오른쪽으로 100px 이동
      });
    }
  }, 300)
); // 300ms 단위로 호출

toTopEl.addEventListener("click", function () {
  // window 객체 : 우리가 보는 화면 창
  gsap.to(window, 0.7, {
    scrollTo: 0, // 화면의 위치를 0px 지점으로 이동
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.8초 뒤에 나타난다.
    opacity: 1,
  });
});

// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true, // 자동재생
  loop: true, // 반복재생
}); // new : 생성자 함수를 호출할 때 사용하는 키워드

new Swiper(".promotion .swiper-container", {
  // deirection: "horizontal", // 기본값
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복재생 (맨끝에서 다시 처음으로)
  autoplay: {
    delay: 5000, // 5초에 한번씩 자동재생
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
  loop: true, // 반복재생
  autoplay: true, // 자동재생
  spaceBetween: 30, // 슬라이드 사이 여백
  navigation: {
    prevEl: ".awards .swiper-prev", // 이전 버튼 클래스명
    nextEl: ".awards .swiper-next", // 다음 버튼 클래스명
  },
});

const promotionToggleBtn = document.querySelector(".toggle-promotion");
const promotionEl = document.querySelector(".promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  // const isHidePromotion = promotionEl.classList.contains("hide");
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add("hide");
  } else {
    // 보임 처리
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size, // 위아래로 size px 만큼 움직임
    repeat: -1, // 무한반복
    yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생 -> 부드럽게 이동
    ease: Power1.easeInOut, // gsap easing 참고, 느리게 시작해서 빨라졌다가 느려지는 애니메이션
    delay: random(0, delay), // gsap에서 delay는 지연시간.
  });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  // Scene : scroll-magic이라는 js 라이브러리를 통해서 특정한 요소를 감시하는 옵션을 지정해주는 메소드
  // 스크롤이 발생하는 컨테이너
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 하나의 section 요소를 지정
    triggerHook: 0.8, // 뷰포트의 0.8 지점에서 감시 , 감시하려는 요소가 0.8 지점에 걸리면 tigger 된다.
  })
    // .setClassToggle(요소, 클래스 이름) : 요소가 감시되면 클래스를 추가하거나 제거하는 메소드
    .setClassToggle(spyEl, "show") // 화면에 보여진다고 판단이 되면 메소드를 실행
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당하는 메소드
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); // 2024
