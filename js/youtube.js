// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// 함수명은 반드시 onYouTubeIframeAPIReady로 지정해야 한다. 이것은 유튜브에서 정한 규칙이다.
function onYouTubeIframeAPIReady() {
  // html에서 id를 player라고 지정한 id 속성의 값이 들어가는 것.
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", // 최초 재생할 유튜브 영상 ID , 유튜브 영상 url에서 v= 뒤에 있는 값
    playerVars: {
      autoplay: true, // 자동재생 유무
      loop: true, // 반복재생 true인 경우, playlist에 목록이 있어야 반복재생이 된다.
      playlist: "An6LvWQuj_8", // 반복재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        // 객체데이터 내부에 함수데이터 할당 => 메소드 라고 한다.
        // 익명함수의 매개변수로 event를 사용 -> event는 동영상 플레이어가 onReady == 즉, 준비가 되면 함수 실행
        // 함수를 실행할 때 그 함수의 인수로 이 동영상이 플레이되는 어떤 상황 자체를 데이터로서 넘겨주는 것.
        // 그러면 우리는 이 함수 내에서 그것을 event라는 매개변수의 이름으로 받아서 함수 내부에서 활용해서 사용할 수 있다.
        // event.target : 재생되고있는 영상자체를 의미
        event.target.mute(); // 음소거
      },
    },
  });
}
