$(function () {
  const progressBar = document.querySelector(".product-slider-progress");
  const fraction = document.getElementById("fraction");
  const slideCount = document.querySelector(".mySwiper-inner").children.length;

  const swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    speed: 700,
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  progressBar.addEventListener("animationend", myEndFunction);

  function myEndFunction() {
    swiper.slideNext();
    progressBar.style.animation = "none";
    void progressBar.offsetWidth;
    progressBar.style.animation = null;
  }

  swiper.on("slideChange", function () {
    progressBar.style.animation = "none";
    void progressBar.offsetWidth;
    progressBar.style.animation = null;
    progressBar.style.animationPlayState = "running";
    fraction.textContent = `${swiper.realIndex + 1} / ${slideCount}`;
  });

  document.querySelectorAll(".swiper, .carousel-progress").forEach((item) => {
    item.addEventListener("mouseleave", function () {
      progressBar.style.animationPlayState = "running";
    });
  });

  (() => {
    fraction.textContent = `${swiper.realIndex + 1} / ${slideCount}`;
  })();



  const aboutProgressBar = document.querySelector(".about-slider-progress");

  const aboutSlider = new Swiper(".about-slider", {
    slidesPerView: 2.5,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".about-slider-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      566: {
        slidesPerView: 2
      },
      951: {
        slidesPerView: 2.5
      }
    }
  });

  aboutProgressBar.addEventListener("animationend", myEndFunction2);

  function myEndFunction2() {
    aboutSlider.slideNext();
    aboutProgressBar.style.animation = "none";
    void aboutProgressBar.offsetWidth;
    aboutProgressBar.style.animation = null;
  }

  aboutSlider.on("slideChange", function () {
    aboutProgressBar.style.animation = "none";
    void aboutProgressBar.offsetWidth;
    aboutProgressBar.style.animation = null;
    aboutProgressBar.style.animationPlayState = "running";
  });

  const burger = document.querySelector(".header-burger")
  const exit = document.querySelector(".header-menu-exit")
  const menu = document.querySelector(".header-content")

  burger.addEventListener("click", () => {
    menu.classList.add("open")
  })
  exit.addEventListener("click", () => {
    menu.classList.remove("open")
  })
});
