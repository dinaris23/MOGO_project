var headerPosition = 0,
    widthRedBlock = '0%',
    headerRedLine = $('.red__line'),
    headerIndex = 0;
     
$('.header__images').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: false,
    speed: 500,
    prevArrow: false,
    nextArrow: false,
    zIndex: 0
});

$('.header__content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    prevArrow: false,
    nextArrow: false,
    zIndex: 0
});

$('.header__slider a').click(function() {
    var slideIndex = $(this).data('slide');
    clearRedLine();
    clearInterval();
    headerIndex = slideIndex;
    $('.header__images').slick('slickGoTo', slideIndex);
    $('.header__content').slick('slickGoTo', slideIndex);
 });

$("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),   
        top = $(id).offset().top,
        delay = 1000;
    if (top > 6000) delay = 2000;
    if (top > 3000) delay = 1000;
    $('body,html').animate({scrollTop: top}, delay);
});

$(".header__content .content__item").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),   
        top = $(id).offset().top,
        delay = 1000;
    if (top > 6000) delay = 2000;
    if (top > 3000) delay = 1000;
    $('body,html').animate({scrollTop: top}, delay);
});

$('.header__phone').click(function() {
    $('.header__nav').slideToggle(1000);
    if ($('.header__nav').classList('header--close')) {
        $('.header__nav').removeClass('header--close');
    } else $('.header__nav').addClass('header--close');
 });

 $( window ).resize(function() {
    if ($(window).width() > 992) $('.header--close').slideToggle(1000);
});


setTimeout(function() { 
    $('.header .animated--longer').removeClass('animated--longer'); 
}, 1000);
setInterval(addRedLine, 50);



function addRedLine() {
    if (headerPosition >= 100) {        
        clearRedLine();
        $('.header__images').slick('slickNext');
        $('.header__content').slick('slickNext');
        headerIndex < headerRedLine.length - 1  ? headerIndex++ : headerIndex = 0;
    } else {    
        headerPosition += 1;    
        widthRedBlock = headerPosition + '%';    
        headerRedLine[headerIndex].style.width = widthRedBlock; 
    }
}

function clearRedLine() {
    headerPosition = 0;
    widthRedBlock = headerPosition + '%';    
    headerRedLine[headerIndex].style.width = widthRedBlock;  
}
    