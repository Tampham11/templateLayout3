$(document).ready(function() {
    var swiper1 = new Swiper('.swiper-container-1', {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer: true, observeParents: true
    });

    var swiper2 = new Swiper('.swiper-container-2', {
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
        990: {
          slidesPerView: 2,
        },
        770: {
          slidesPerView: 1,
        },
      },
      observer: true, observeParents: true
    });

    var swiper3 = new Swiper('.swiper-container-3', {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
        },
        990: {
          slidesPerView: 2,
        },
        770: {
          slidesPerView: 1,
        },
      },
      observer: true, observeParents: true
    });

    var swiper4 = new Swiper('.swiper-container-4', {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer: true, observeParents: true
    });

var swiper5 = new Swiper('.swiper-container-5', {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
        1024: {
          slidesPerView: 5,
        },
        990: {
          slidesPerView: 3,
        },
        770: {
          slidesPerView: 2,
        },
      },
      observer: true, observeParents: true
});

  var swiper6 = new Swiper('.swiper-container-6', {
    slidesPerView: 1,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
    observer: true, 
    observeParents: true,
    // paginationType: 'progress',
    // paginationClickable: true,
});
// swiper6.update();
  setTimeout(function(){
    
    $('#loader').css({
      display: 'none'
    });
    $('#all-web').css({
      display: 'block',
    });
    swiper6.update();
    // swiper6.navigation.update();
    // swiper6.pagination.update();
    // swiper6.autoplay.start();
  }, 3000);


  // swiper6.startAutoplay(); //just in case


});