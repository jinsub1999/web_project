let music_list = [];
let play_btns_eventFunction = [];
let play_btns_eventListener = [];

let assignMUSICS = function () {
  let playing_music_img = document.querySelector("#playing_music_img");
  let playing_music_title = document.querySelector(".playing_music_title");
  let playing_music_artist = document.querySelector(".playing_music_artist");

  let play_btns = document.querySelectorAll(".music_player__music-box");
  while (music_list.length) music_list.pop();
  while (play_btns_eventFunction.length) play_btns_eventFunction.pop();
  while (play_btns_eventListener.length) play_btns_eventListener.pop();
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
};

let scrollBox = document.querySelector(".music_scrollbar");
// make music box by js

let makeMusicBox = function (imgsrc__, title__, artist__) {
  let musicBox_a = document.createElement("div");
  musicBox_a.classList.add("music_player__music-box");

  let musicimg_a = document.createElement("img");
  musicimg_a.setAttribute("src", imgsrc__);
  musicBox_a.appendChild(musicimg_a);

  let music_titlebox_a = document.createElement("div");
  music_titlebox_a.classList.add("music_title_box");
  let music_titletxt_a = document.createElement("span");
  music_titletxt_a.classList.add("music_title");
  music_titletxt_a.innerHTML = title__;
  music_titlebox_a.appendChild(music_titletxt_a);
  musicBox_a.appendChild(music_titlebox_a);

  let music_artistbox_a = document.createElement("div");
  music_artistbox_a.classList.add("music_artist_box");
  let music_artisttxt_a = document.createElement("span");
  music_artisttxt_a.classList.add("music_artist");
  music_artisttxt_a.innerHTML = artist__;
  music_artistbox_a.appendChild(music_artisttxt_a);
  musicBox_a.appendChild(music_artistbox_a);

  let music_playit_a = document.createElement("div");
  music_playit_a.classList.add("play-it");
  let music_playicon_a = document.createElement("i");
  music_playicon_a.classList.add("fas");
  music_playicon_a.classList.add("fa-play");
  music_playit_a.appendChild(music_playicon_a);
  musicBox_a.appendChild(music_playit_a);
  return musicBox_a;
};

let addMusicToPlaylist = function (imgsrc__, title__, artist__) {
  scrollBox.appendChild(makeMusicBox(imgsrc__, title__, artist__));
};
addMusicToPlaylist(
  "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/375/258/80375258_1381488898413_1_600x600.JPG/dims/resize/Q_80,0",
  "스물다섯, 스물하나",
  "자우림"
);
assignMUSICS();
let resetPlaylist = function () {
  while (scrollBox.firstChild) {
    scrollBox.removeChild(scrollBox.firstChild);
  }
};
