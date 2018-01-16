$(window).scroll(function() {
    $('.zoom').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass('zoomIn');
      }
    });
  });
