// const btnNext = document.querySelector(".btn-next");
// const btnPrevious = document.querySelector(".btn-previous");
// btnNext.addEventListener("click", () => Next());
// btnNext.addEventListener("click", () => Previous());

let img = [];
for (let i = 1; i < 4; i++) {
  img[i] = new Image();
  img[i].src = "/imgs/banner" + i + ".jpg";
}
console.log(img[1].src);
var index = 0;
function auto() {
  index++;
  if (index == img.length) index = 0;
  var anh = document.getElementById("img-banner");
  anh.src = img[index].src;
  t = setTimeout("auto()", 5000);
}
const Previous = () => {
  index--;
  if (index < 0) index = img.length;
  var anh = document.getElementById("img-banner");
  anh.src = img[index].src;
};
const Next = () => {
  index++;
  if (index >= img.length) index = 0;
  var anh = document.getElementById("img-banner");
  anh.src = img[index].src;
};
// window.onload(auto());
