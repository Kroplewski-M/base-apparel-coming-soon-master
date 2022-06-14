let hero = document.querySelector("#hero");
let email = document.querySelector("#emailInput");
let submit = document.querySelector("#emailSubmit");
let error = document.querySelector("#error");
let errorMessage = document.querySelector("#errorMessage");

window.addEventListener("resize", function () {
  if (document.body.clientWidth > 768) {
    hero.src = "./images/hero-desktop.jpg";
  } else {
    hero.src = "./images/hero-mobile.jpg";
  }
});

submit.addEventListener("click", function () {
  let mail = email.value;

  if (mail == "") {
    error.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
    email.classList.add("border-red-400");
  } else if (!mail.includes("@")) {
    error.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
    email.classList.add("border-red-400");
  } else {
    error.classList.add("hidden");
    errorMessage.classList.add("hidden");
    email.classList.add("border-[#BC9E9F]");
    email.value = "";
    alert("email sent");
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
