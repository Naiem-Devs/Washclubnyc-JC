(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // if (jQuery(window).width() <= 767) {
  //   jQuery('.reviwe_slider').owlCarousel({
  //     stagePadding: 0,
  //     loop: true,
  //     responsiveClass: true,
  //     dots: true,
  //     nav: false,
  //     autoHeight: true,
  //     items: 1
  //   });
  // }

  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });

  if (jQuery(window).width() <= 767) {
    $('.reviwe_slider').addClass('rvs')
  }
  
  $('.rvs').owlCarousel({
    stagePadding: 0,
    loop: true,
    responsiveClass: true,
    dots: true,
    nav: false,
    autoHeight: true,
    items: 1
});



  // page Animation
  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);
