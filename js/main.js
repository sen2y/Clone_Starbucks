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
