(function($){

    // 슬라이드
    $('.slide-inner').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 6000,
        speed: 600,
        slideToShow: 1,
        slideToScroll: 1,
        pauseOnHover: true,
        pauseOnDotHover: false,
        pauseOnFocus: false,
        cssEase: 'linear',
        draggable: true,
        arrows: true,
        prevArrow: '<button class="prev arr-box"><span class="arr arr-left"></span></button>',
        nextArrow: '<button class="next arr-box"><span class="arr arr-right"></span></button>'
    })

})(jQuery)