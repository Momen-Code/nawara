                            //slider1

var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });





                            //slider2

var appendNumber = 4;
var prependNumber = 1;
var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
    el: '.swiper-pagination2',
    clickable: true,
    },

});


                            //burgur

