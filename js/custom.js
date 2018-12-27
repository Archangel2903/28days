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
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true
                        }
                    }
                ]
            });
        });
    }

    if ($('.select2').length) {
        $('.select2').each(function () {
            $(this).select2({
                // placeholder: $(this).data('placeholder')
            });

            var thisPlaceholder = $(this).data('placeholder');

            if (thisPlaceholder.length) {
                $(this).next().find($('.select2-selection')).attr('data-pholder', thisPlaceholder);
            }
        });
    }

    $('.login-hint__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        /*responsive: [
            {
                breakpoint: 395,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]*/
    });
    /* components */

    $('.burger-js').on('click', function (e) {
        e.stopPropagation();
        $(this).toggleClass('active').next().toggleClass('is-open');
    });

    $('.header-menu__content').on('click', function (e) {
        e.stopPropagation();
    });

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

    $('.auth-list').on('click', function (e) {
        if (!$(this).hasClass('active')) {
            e.preventDefault();
        }
        $(this).toggleClass('active').next().toggleClass('active');
        e.stopPropagation();
    });

    $('.header-menu__auth-menu').on('click', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', function (e) {
        $('.burger-js').removeClass('active').next().removeClass('is-open');
        $('.auth-list').removeClass('active').next().removeClass('active');
    });

    /**
     * Auto Placement Items
     * @param itemsWrap - items parent
     * @param columns - number of column items
     */
    function ap(itemsWrap, columns) {
        var containerInnerSize = itemsWrap.width(),
            placementItems = itemsWrap.children(),
            marginDefault = placementItems.filter(':first-child').css('margin-bottom'),
            itemsNotMargin = placementItems.filter(':nth-child(' + columns + 'n + ' + columns + ')'),
            placementItemsSize = placementItems.innerWidth(),
            result = containerInnerSize - placementItemsSize * columns,
            itemsQuantity = placementItems.length,
            lastItemsQuantity = (itemsQuantity - columns);

        placementItems
            .css({
                'margin-right': Math.floor(result / (columns - 1)),
                'margin-bottom': marginDefault
            })
            .slice(lastItemsQuantity)
            .css({'margin-bottom': 0});

        itemsNotMargin.css({'margin-right': 0});
    }

    /* init ap function */
    var $initElement = $('.autoplacement-js');

    $(window).on('load resize', function () {
        if ($(window).innerWidth() > 991) {
            ap($initElement, 4);
        }
        else if ($(window).innerWidth() <= 991 && $(window).innerWidth() > 768) {
            ap($initElement, 3);
        }
        else if ($(window).innerWidth() <= 768 && $(window).innerWidth() > 480) {
            ap($initElement, 2);
        }
        else if ($(window).innerWidth() <= 480 && $(window).innerWidth() > 0) {
            ap($initElement, 1);
        }

        if ($('.sticky').length) {
            $('.header.sticky + .content').css('padding-top', $('.header.sticky').height());
        }
    });

    $(document).on('load scroll', function (e) {
        if ($(document).scrollTop() >= 300) {
            $('.results__indicators-val:not(.active)').spincrement({
                from: 0,
                to: false,
                decimalPlaces: 0,
                decimalPoint: '.',
                thousandSeparator: ',',
                duration: 6000, // ms; TOTAL length animation
                leeway: 100, // percent of duraion
                easing: 'spincrementEasing',
                fade: true,
                complete: function (e) {
                    e.addClass('active');
                }
            });
        }
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