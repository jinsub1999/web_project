let apply_btn = document.querySelectorAll(".themebox");
let mainC, secondC, thirdC;

function rgb2hex(rgb) {
  if (rgb.search("rgb") == -1) {
    return rgb;
  } else {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }
}

for (var i = 0; i < apply_btn.length; i++) {
  mainC = window.getComputedStyle(apply_btn[i].children[1].children[0])
    .backgroundColor;
  secondC = window.getComputedStyle(apply_btn[i].children[2].children[0])
    .backgroundColor;
  thirdC = window.getComputedStyle(apply_btn[i].children[3].children[0])
    .backgroundColor;
  apply_btn[i].children[4].href +=
    "&maincolor=" + encodeURIComponent(rgb2hex(mainC.toString()));
  apply_btn[i].children[4].href +=
    "&secondcolor=" + encodeURIComponent(rgb2hex(secondC.toString()));
  apply_btn[i].children[4].href +=
    "&thirdcolor=" + encodeURIComponent(rgb2hex(thirdC.toString()));
}
