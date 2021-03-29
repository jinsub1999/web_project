let submit_box = document.querySelector(".personal-settings");

let applyColor = function () {
  for (var i = 0; i < get_color.length; i++) {
    myattr = get_color[i].split("=");
    attr_name = myattr[0];
    attr_property = myattr[1];

    if (attr_name == "bgcolor") {
      document.documentElement.style.setProperty(
        "--block-background",

        decodeURIComponent(attr_property)
      );
    }
    if (attr_name == "txtcolor") {
      document.documentElement.style.setProperty(
        "--text-color",
        decodeURIComponent(attr_property)
      );
    }
    if (attr_name == "sbcolor") {
      document.documentElement.style.setProperty(
        "--green-background-color",
        decodeURIComponent(attr_property)
      );
    }
  }
};
