import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

const initSwiper = () => {
  new Swiper(".shelf-swiper", {
    // Optional parameters
    slidesPerView: 6,
    spaceBetween: 16,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".banner-swiper", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

export default initSwiper;
