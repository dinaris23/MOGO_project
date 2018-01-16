var countSlides = 6,
    displayWidth = $(window).width();

if (displayWidth < 768) countSlides = 3;
if (displayWidth < 400) countSlides = 2;

$(".logo").slick({
    slidesToShow: countSlides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
    zIndex: 0,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2
          }
        }
      ]
});
