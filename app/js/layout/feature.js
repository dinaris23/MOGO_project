function onIphone () {
    $('.feature__display').toggleClass('noopacity');
}

$(window).scroll(function() {
    $('.feature__display').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $('.feature__display').addClass('noopacity');
      }
    });
  });