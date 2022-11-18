const btn = document.querySelector(".hamburger");
const btnActive = document.querySelector(".close");
const navBar = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li a");
console.log(navLinks);
// onclick behaviour
btn.addEventListener("click", function (e) {
  btn.style.display = "none";
  btnActive.style.display = "block";
  navBar.style.top = "30%";
});

//
btnActive.addEventListener("click", function (e) {
  btn.style.display = "block";
  btnActive.style.display = "none";
  navBar.style.top = "-50%";
});

navLinks.forEach((navlink) => {
  navlink.addEventListener("click", function () {
    btn.style.display = "block";
    btnActive.style.display = "none";
    navBar.style.top = "-50%";
  });
});
