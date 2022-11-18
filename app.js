const btn = document.querySelector(".hamburger");
const btnActive = document.querySelector(".hamburger-active");
btn.addEventListener("click", function (e) {
  btn.style.display = "none";
  btnActive.style.display = "block";
});
