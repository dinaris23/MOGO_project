/*
$('.popups__popup').click(function() {
    if ($(this).next().css('display') == 'block') {
        return 0;
    }

    for (var i = 0; i < $('.popups__popup').length; i++) {
        if ($('.popups__popup')[i].next().css('display') != 'block') {
            $('.popups__popup')[i].next().slideToggle(1000);
        }
    }
    $(this).next().slideToggle(1000);
 }); */

 $('.popups__popup').click(function() {
    if ($(this).next().css('display') == 'block') {
        return 0;
    }
    $('.js-active').slideToggle(1000).removeClass('js-active');
    $(this).next().slideToggle(1000).addClass('js-active');
 });

 