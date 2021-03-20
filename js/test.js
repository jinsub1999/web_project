function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

let musicplayerlink = document.querySelector(".main_screen > a");

if (isMobile()) {
  musicplayerlink.setAttribute("href", "./music_player_m.html");
} else {
  musicplayerlink.setAttribute("href", "./music_player.html");
}
