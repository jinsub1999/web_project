let statusBarBtn = document.querySelectorAll(".status-bar .status-bar__btn");
let otherBtn = document.querySelectorAll(".user_info__column a");
let otherBtn2 = document.querySelectorAll(".artist-talk a");
let precolorBtn = document.querySelector(".personal-settings");
let colorBtn;

if (precolorBtn != null) colorBtn = precolorBtn.children;
let get_color = window.location.search
  .substring(1, window.location.search.length)
  .split("&");

let get_only_color = [];
for (var i = 0; i < get_color.length; i++) {
  let temp = get_color[i].split("=");
  if (
    temp[0] == "maincolor" ||
    temp[0] == "secondcolor" ||
    temp[0] == "thirdcolor"
  )
    get_only_color.push(temp);
}

let maincolor = "";
let secondcolor = "";
let thirdcolor = "";
// applying color
for (var i = 0; i < get_only_color.length; i++) {
  myattr = get_only_color[i];
  attr_name = myattr[0];
  attr_property = myattr[1];
  if (attr_name == "maincolor") {
    document.documentElement.style.setProperty(
      "--main-color",

      decodeURIComponent(attr_property)
    );
    maincolor = attr_property;
    if (precolorBtn != null)
      colorBtn[1].setAttribute("value", decodeURIComponent(maincolor));
  }
  if (attr_name == "secondcolor") {
    document.documentElement.style.setProperty(
      "--second-color",
      decodeURIComponent(attr_property)
    );
    secondcolor = attr_property;
    if (precolorBtn != null)
      colorBtn[3].setAttribute("value", decodeURIComponent(secondcolor));
  }
  if (attr_name == "thirdcolor") {
    document.documentElement.style.setProperty(
      "--third-color",
      decodeURIComponent(attr_property)
    );
    thirdcolor = attr_property;
    if (precolorBtn != null)
      colorBtn[5].setAttribute("value", decodeURIComponent(thirdcolor));
  }
}
colorURL = "";
colorURL += "&maincolor=" + maincolor;
colorURL += "&secondcolor=" + secondcolor;
colorURL += "&thirdcolor=" + thirdcolor;

if (get_only_color.length > 0) {
  for (var i = 0; i < statusBarBtn.length; i++) {
    var temp = statusBarBtn[i].href;
    if (temp.endsWith("html")) statusBarBtn[i].href += "?";
    statusBarBtn[i].href += colorURL;
  }
  for (var i = 0; i < otherBtn.length; i++) {
    var temp = otherBtn[i].href;
    if (temp.endsWith("html")) otherBtn[i].href += "?";
    otherBtn[i].href += colorURL;
  }
  for (var i = 0; i < otherBtn2.length; i++) {
    var temp = otherBtn2[i].href;
    if (temp.endsWith("html")) otherBtn2[i].href += "?";
    otherBtn2[i].href += colorURL;
  }
}
