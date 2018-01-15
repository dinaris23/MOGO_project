 $('.popups__popup').click(function() {
    if ($(this).next().css('display') == 'block') {
        $('.svg').removeClass('svg');
        $('.js-active').slideToggle(1000).removeClass('js-active');
        return 0;
    }
    $('.svg').removeClass('svg');
    $(this).children('.svg-icon-grey').addClass('svg');
    $('.js-active').slideToggle(1000).removeClass('js-active');
    $(this).next().slideToggle(1000).addClass('js-active');
 });

 