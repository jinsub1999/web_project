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
  if (temp[0] == "bgcolor" || temp[0] == "txtcolor" || temp[0] == "sbcolor")
    get_only_color.push(temp);
}

let bgcolor = "";
let txtcolor = "";
let sbcolor = "";
// applying color
for (var i = 0; i < get_only_color.length; i++) {
  myattr = get_only_color[i];
  attr_name = myattr[0];
  attr_property = myattr[1];
  if (attr_name == "bgcolor") {
    document.documentElement.style.setProperty(
      "--block-background",

      decodeURIComponent(attr_property)
    );
    bgcolor = attr_property;
    if (precolorBtn != null)
      colorBtn[1].setAttribute("value", decodeURIComponent(bgcolor));
  }
  if (attr_name == "txtcolor") {
    document.documentElement.style.setProperty(
      "--text-color",
      decodeURIComponent(attr_property)
    );
    txtcolor = attr_property;
    if (precolorBtn != null)
      colorBtn[3].setAttribute("value", decodeURIComponent(txtcolor));
  }
  if (attr_name == "sbcolor") {
    document.documentElement.style.setProperty(
      "--green-background-color",
      decodeURIComponent(attr_property)
    );
    sbcolor = attr_property;
    if (precolorBtn != null)
      colorBtn[5].setAttribute("value", decodeURIComponent(sbcolor));
  }
}
colorURL = "";
colorURL += "&bgcolor=" + bgcolor;
colorURL += "&txtcolor=" + txtcolor;
colorURL += "&sbcolor=" + sbcolor;

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
