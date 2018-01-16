$(window).scroll(function() {
  $('.zoom').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+600) {
      $(this).addClass('zoomIn');
    }
  });
});

$(window).scroll(function() {
  $('.section-title').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+400) {
      $(this).addClass('tada animated--longer');
      $(this).next().addClass('tada animated--longer');
    }
  });
});

$(window).scroll(function() {
  $('.logos .logo').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+400) {
      $(this).addClass('flash animated--longer');
    }
  });
});