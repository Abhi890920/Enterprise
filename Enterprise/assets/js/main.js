
!(function($) {
  "use strict";

  var swiper = new Swiper('#heroSlider', {
    slidesPerView: 1,
    autoplay: {delay: 4000 },
    mousewheel: {invert: true },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
    },

  });

  $(document).ready(function() {

    $(".navbarToggle").click(function(){
      $('body').toggleClass("nav-open");
      $(this).toggleClass("collapsed");
    });
    $('.navBackDrop').click(function(){
      $('body').removeClass("nav-open");
    });
  
  });

})(jQuery);