let b = document.querySelector("i.fa-chevron-right");

changeBackground = function () {
  b.style.backgroundColor = "rgb(51, 94, 122)";
  b.style.transition = "background-color 0.3s ease-in-out";
};

changeBackgroundOri = function () {
  b.style.backgroundColor = "rgb(76, 128, 163)";
};

b.addEventListener("mouseenter", changeBackground);
b.addEventListener("mouseleave", changeBackgroundOri);
