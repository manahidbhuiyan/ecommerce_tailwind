// announcement bar function
const announcement_close_btn = document.querySelector('.announcemnt_close_btn')
const announcement_bar = document.querySelector('.announcement_bar')

announcement_close_btn.addEventListener("click", () => {
    announcement_bar.classList.add("hidden")
})

// mobile menu function
const mobileBtn = document.querySelector(".menu-btn")
const mobileMenu = document.querySelector(".mobile-menu")

mobileBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("hidden")
})


// swiper slider
// const swiper = new Swiper('.mySwiper', {
//     // Optional parameters
//     slidesPerView: 3.2,
//     spaceBetween: 30,
//     loop: true,
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 640px
    640: {
        slidesPerView: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3.2,
      },
    },
    on: {
      slideChange: function () {
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach((slide, index) => {
          if (index >= this.activeIndex && index < this.activeIndex + 3) {
            slide.style.opacity = '1';
          } else if (index === this.activeIndex + 3) {
            slide.style.opacity = '0.5';
          } else {
            slide.style.opacity = '1';
          }
        });
      },
      init: function () {
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach((slide, index) => {
          if (index < 3) {
            slide.style.opacity = '1';
          } else if (index === 3) {
            slide.style.opacity = '0.5';
          } else {
            slide.style.opacity = '1';
          }
        });
      },
    },
  });
