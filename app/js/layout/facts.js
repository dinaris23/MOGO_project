$(window).scroll(function() {
  var hT = $('.fact__counter').offset().top,
      hH = $('.fact__counter').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
   console.log((hT-wH) , wS);
  if (wS > (hT+hH-wH)){
    $('.fact__counter').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {
        duration: 1500,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
  
      });  
  
    });
  }
});

