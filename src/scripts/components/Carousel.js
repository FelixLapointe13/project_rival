import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;

    this.options = {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,

      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 90,
        },
      },

      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        clickable: true,
      },

      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };

    this.init();
  }

  init() {
    this.swiper = new Swiper(this.element, this.options);
  }
}
