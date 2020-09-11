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
    
    // 모바일 nav 클릭
    $('.open-nav').toggle(
        function(){
            $(this).parent().addClass('on')
            $('.lognav-box').stop().slideDown(800)
        },
        function(){
            $(this).parent().removeClass('on')
            $('.lognav-box').stop().slideUp(800)
        }
    )

    // 리사이즈 + nav슬라이드
    function init() {
        var winWidth = $(window).innerWidth()
        if (winWidth > 1180 && !$('html').hasClass('pc')) {
            $('.toph1Nav').removeClass('on')
            $('.depth1').css({display: 'inline-block'})
            $('.lognav-box').css({display: 'block'})
            $('.nav').css({display: 'block'})
            $('.toplogin a:first-child span').text('')
            $('.toplogin a:last-child span').text('')
            $('.nav').hover(
                function(){
                    $(this).find('.depth2').stop().slideDown(800)
                    $('.deco-box').stop().slideDown(800)
                },
                function(){
                    $(this).find('.depth2').stop().slideUp(800)
                    $('.deco-box').stop().slideUp(800)
                }
            )
            $('html').addClass('pc').removeClass('mobile')
        } else if (winWidth < 1180 && !$('html').hasClass('mobile')) {
            $('.depth1').css({display: 'block'})
            $('.toph1Nav').removeClass('on')
            $('.depth2').css({display:'none'})
            $('.lognav-box').css({display: 'none'})
            $('.toplogin a:first-child span').text('LOGIN')
            $('.toplogin a:last-child span').text('LOCATION')
            $('.nav').hover(
                function(){
                    $(this).find('.depth2').css({display:'none'})
                    $('.deco-box').css({display:'none'})
                },
                function(){
                    $(this).find('.depth2').stop().slideUp()
                    $('.deco-box').stop().slideUp()
                }
            )
            $('html').addClass('mobile').removeClass('pc')
        }
    }
    init()
    $(window).resize(function(){
        init()
    })

    // load
    $('#containerArea').load('main.html')

    $('.toplogin a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#containerBox').remove()
        $('#containerArea').load(url)
    })


})(jQuery)