//* seccion  reload  and cleaning form country
const paissel = document.getElementById("paissel");
const mensajeSpan = document.getElementById("seleccioncountry");
const FormCountry = document.getElementById("app-cover");
const SelecCountry = document.getElementById("seleccioncountry");

paissel.addEventListener("input", function () {
  // Si el valor del input es mayor 0 = a "0", hacer el span invisible, de lo contrario, hacerlo visible.
  if (paissel.value >= "0") {
    mensajeSpan.style.visibility = "hidden";
    console.log("escondido");
  } else {
    mensajeSpan.style.visibility = "visible";
    console.log("visible");
  }
});
FormCountry.addEventListener("reset", function () {
  // Cambiar el valor del input después del reset, después de un pequeño retraso
  setTimeout(function () {
    SelecCountry.style.visibility = "visible";
    console.log("si entro en funcion reset");
  }, 10);
});
/**=================================================================================================================
 * ===================================================================================================
 */

let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};

document.querySelector("#close-navbar").onclick = () => {
  navbar.classList.remove("active");
};

let registerBtn = document.querySelector(".account-form .register-btn");
let loginBtn = document.querySelector(".account-form .login-btn");

registerBtn.onclick = () => {
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
  document
    .querySelector(".account-form .login-form")
    .classList.remove("active");
  document
    .querySelector(".account-form .register-form")
    .classList.add("active");
};

loginBtn.onclick = () => {
  registerBtn.classList.remove("active");
  loginBtn.classList.add("active");
  document.querySelector(".account-form .login-form").classList.add("active");
  document
    .querySelector(".account-form .register-form")
    .classList.remove("active");
};

let accountForm = document.querySelector(".account-form");

document.querySelector("#account-btn").onclick = () => {
  accountForm.classList.add("active");
};

document.querySelector("#close-form").onclick = () => {
  accountForm.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
});

var swiper = new Swiper(".home-courses-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

let accordion = document.querySelectorAll(
  ".faq .accordion-container .accordion"
);

accordion.forEach((acco) => {
  acco.onclick = () => {
    accordion.forEach((dion) => dion.classList.remove("active"));
    acco.classList.toggle("active");
  };
});

document.querySelector(".load-more .btn").onclick = () => {
  document.querySelectorAll(".courses .box-container .hide").forEach((show) => {
    show.style.display = "block";
  });
  document.querySelector(".load-more .btn").style.display = "none";
};
