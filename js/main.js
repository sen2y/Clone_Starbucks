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
    } else {
      // 배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
); // 300ms 단위로 호출
