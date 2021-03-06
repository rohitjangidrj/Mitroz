$(document).ready(function() {
    "use strict";
    // var window_width = $(window).width(),
    //     window_height = window.innerHeight,
    //     header_height = $(".default-header").height(),
    //     header_height_static = $(".site-header.static").outerHeight(),
    //     fitscreen = window_height - header_height;
    // $(".fullscreen").css("height", window_height)
    // $(".fitscreen").css("height", fitscreen);

    var window_height = window.innerHeight,
        window_width = window.innerWidth;
    console.log(window_height);
    console.log(window_width);
    if (window_width > 768) {
        $(".fullscreen").css("height", window_height);
    }

    if (document.getElementById("default-select")) {
        $('select').niceSelect();
    };
    if (document.getElementById("service-select")) {
        $('select').niceSelect();
    };
    $('.img-gal').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    // Initiate superfish on nav menu
    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });


    // Mobile Navigation
    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="material-icons">menu</i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');
        $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa fa-chevron-down lnr-chevron-down");
        });
        $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
            $('#mobile-body-overly').toggle();
        });
        $(document).click(function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
        $('#mobile-nav ul li ul').css('display', 'block');
        $('#mobile-nav ul li ul li ul').css('display', 'none');
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }
    // Smooth scroll for the menu and links with .scrollto classes
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;
                if ($('#header').length) {
                    top_space = $('#header').outerHeight();
                    if (!$('#header').hasClass('header-fixed')) {
                        top_space = top_space;
                    }
                }
                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');
                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }
    });

    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('#navigation-header li a').each(function() {
        if (this.href === path) {
            $(this).addClass('menu-active');
        }
    });

    $(document).ready(function() {
        $('html, body').hide();
        if (window.location.hash) {
            setTimeout(function() {
                $('html, body').scrollTop(0).show();
                $('html, body').animate({
                    scrollTop: $(window.location.hash).offset().top - 108
                }, 1000)
            }, 0);
        } else {
            $('html, body').show();
        }
    });

    // Logo 

    // Main Logo Header

    var html = '<a href="/">';
    html += '<img id="logo" src="/assets/main/mitroz-dark.svg" alt="Mitroz Technologies" class="img-fluid">';
    html += '</a>';

    $(".heading-logo").append(html);



    //Logo Scroll Function

    $(window).scroll(function() {
        if ($(this).scrollTop() > 30) {
            $('#header').addClass('header-scrolled');
            $("#logo").attr("src", "/assets/main/mitroz-dark.svg");
        } else {
            $('#header').removeClass('header-scrolled');
            $("#logo").attr("src", "/assets/main/mitroz-dark.svg");
        }
    });

    // Logo Footer

    var html = '<img src="/assets/main/mitroz-light.svg" alt="Mitroz Technologies" class="img-fluid">';

    $(".footerLogo").append(html);

    // Count Animation

    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // About Us Image

    var htmlAbout = '<img src="assets/main/about-us.svg" alt="Get Statrted with Mitros" class="img-fluid">';

    $(".aboutUsImage").append(htmlAbout);

    $('#testimonial').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('#latestNews').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('#companyLogo').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $('#homepagebanner').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});