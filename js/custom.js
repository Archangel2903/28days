$(window).load(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    }

    $('body').removeClass('loaded');
});

/* viewport width */
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {width: e[a + 'Width'], height: e[a + 'Height']}
}

/* viewport width */
$(function ($) {
    /* placeholder*/
    /*$('input, textarea').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
        });
    });*/
    /* placeholder*/

    /* components */
    if ($('.slick-slider').length) {
        $('.slick-slider').each(function () {
            $(this).slick({
                appendArrows: $(this).closest('section').find('.slider-nav'),
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                variableWidth: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    }
                ]
            });
        });
    }

    $('.login-hint__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    });
    /* components */

    $('.input-js').on('keypress blur', function () {
        if ($(this).val().length) {
            $(this).next().addClass('active');
        } else {
            $(this).next().removeClass('active');
        }
    });

    $('.header-menu__link[href*=#]').on('click', function (e) {
        var $this = $(this);

        $('html, body').stop().animate({
            scrollTop: $($this.attr('href')).offset().top
        }, 750);

        e.preventDefault();
    });
});

var handler = function () {

    var height_footer = $('footer').height();
    var height_header = $('header').height();
    //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;

    if (viewport_wid <= 991) {

    }

}
$(window).bind('load', handler);
$(window).bind('resize', handler);