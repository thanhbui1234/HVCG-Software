const barIcon = document.querySelector(".bar-icon");
const menu = document.querySelector("#menu");
const navBar = document.querySelector(".nav-bar");
barIcon.addEventListener("click", function (e) {
  menu.classList.toggle("active");
});
const handeScroll = () => {
  if (window.scrollY > 700) {
    navBar.classList.add("navbar-active");
  } else {
    navBar.classList.remove("navbar-active");
  }
};
window.addEventListener("scroll", handeScroll);

let img = [];
for (let i = 1; i < 4; i++) {
  img[i] = new Image();
  img[i].src = "/imgs/banner" + i + ".jpg";
}
let index = 0;
function auto() {
  index++;
  if (index == img.length) index = 1;
  let anh = document.getElementById("img-banner");
  anh.src = img[index]?.src;
  t = setTimeout("auto()", 5000);
}
const Previous = () => {
  index--;
  if (index < 0) index = img.length;
  let anh = document.getElementById("img-banner");
  anh.src = img[index].src;
};
const Next = () => {
  index++;
  if (index >= img.length) index = 1;
  let anh = document.getElementById("img-banner");
  anh.src = img[index]?.src;
};

window.addEventListener("load", function () {
  auto();
});
