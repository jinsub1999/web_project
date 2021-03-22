let playing_music_img = document.querySelector("#playing_music_img");
let playing_music_title = document.querySelector(".playing_music_title");
let playing_music_artist = document.querySelector(".playing_music_artist");

let play_btns = document.querySelectorAll(".music_player__music-box");

let music_list = [];
let play_btns_eventFunction = [];
let play_btns_eventListener = [];

for (var i = 0; i < play_btns.length; i++) {
  var elem = play_btns[i];
  var elem_img = elem.children[0];
  var elem_title = elem.children[1].children[0];
  var elem_artist = elem.children[2].children[0];
  var elem_playbtn = elem.children[3];

  music_list.push([elem_img, elem_title, elem_artist, elem_playbtn, i]);
}

var myindx = 0;

var assignFunction = function () {
  for (var i = 0; i < play_btns.length; i++) {
    play_btns_eventFunction.push(function (queryNum) {
      playing_music_img.setAttribute(
        "src",
        music_list[queryNum][0].getAttribute("src")
      );
      playing_music_title.innerHTML = music_list[queryNum][1].innerHTML;
      playing_music_artist.innerHTML = music_list[queryNum][2].innerHTML;
    });
  }
};
assignFunction();

var some_func = function () {
  play_btns_eventFunction[myindx](myindx);
};

some_funcs = [];
for (var i = 0; i < play_btns.length; i++) {
  const c = i;
  some_funcs.push(function () {
    myindx = c;
  });
}

let reset_ani = function () {
  let myImg = document.getElementById("playing_music_img");
  myImg.style.animation = "none";
  myImg.offsetHeight;
  myImg.style.animation = null;
};

for (var i = 0; i < play_btns.length; i++) {
  music_list[i][3].addEventListener("click", reset_ani, false);
  music_list[i][3].addEventListener("click", some_funcs[i], false);
  music_list[i][3].addEventListener("click", some_func, false);
}
