(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  $('#carouselControls').on('slide.bs.carousel', function(e){
    if (e.to == 1 && e.direction == "left") {
      $("#carouselPrev").removeClass("invisible");
      $("#carouselPrev").addClass("visible");
    } else if (e.to == 0 && e.direction == "right") {
      $("#carouselNext").removeClass("invisible");
      $("#carouselNext").addClass("visible");
      $("#carouselPrev").removeClass("visible");
      $("#carouselPrev").addClass("invisible");
    } else if (e.to == 3 && e.direction == "left") {
      $("#carouselNext").removeClass("visible");
      $("#carouselNext").addClass("invisible");
    } else if (e.to == 2 && e.direction == "right") {
      $("#carouselNext").removeClass("invisible");
      $("#carouselNext").addClass("visible");
    }
  });

})(jQuery); // End of use strict


