function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

let artist_picture = document.querySelector(".artist-talk__pic");
let artist_tomelon = document.querySelector(".artist-talk__artist a");
let artist_name = document.querySelector(".artist-talk__name-text");
let artistID = 123123;

let get_link = window.location.search;
let get_link2 = get_link.substring(1, get_link.length).split("&");

for (var i = 0; i < get_link2.length; i++) {
  myattr = get_link2[i].split("=");
  attr_name = myattr[0];
  attr_property = myattr[1];
  if (attr_name == "artistname") {
    artist_name.innerHTML = decodeURIComponent(attr_property);
  }
  if (attr_name == "imgsrc") {
    artist_picture.setAttribute("src", attr_property);
  }
  if (attr_name == "artistid") {
    if (isMobile()) {
      artist_tomelon.setAttribute(
        "href",
        "https://m2.melon.com/artist/detail.htm?artistId=" + attr_property
      );
    } else {
      artist_tomelon.setAttribute(
        "href",
        "https://www.melon.com/artist/detail.htm?artistId=" + attr_property
      );
    }
  }
}
