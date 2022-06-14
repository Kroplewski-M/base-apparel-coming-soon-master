let hero = document.querySelector("#hero");
let email = document.querySelector("#email");
let submit = document.querySelector("#emailSubmitInput");

window.addEventListener("resize", function () {
  if (document.body.clientWidth > 768) {
    hero.src = "./images/hero-desktop.jpg";
  } else {
    hero.src = "./images/hero-mobile.jpg";
  }
});

function init() {
  if (document.body.clientWidth > 768) {
    hero.src = "./images/hero-desktop.jpg";
  } else {
    hero.src = "./images/hero-mobile.jpg";
  }
}

init();
