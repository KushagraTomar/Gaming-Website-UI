
let menu = document.querySelector('.menu-icon');
let mnav = document.querySelector('.menu');
let notf = document.querySelector('.notification');

menu.onclick = () => {
    mnav.classList.toggle('active');
    menu.classList.toggle('move');
    notf.classList.remove('active');
}

document.querySelector('#bell-icon').onclick = () => {
    notf.classList.toggle('active');
}

// swiper code

var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1290: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });