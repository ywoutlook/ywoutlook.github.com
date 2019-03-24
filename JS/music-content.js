// $(window).on('beforeunload', function() {
//     $(".blank").fadeIn(300);
//     $("#main-wrapper-menu,#A1-main,#A1,#A2,#wrapper-A3,#A3,#A4,#A4a,#A4b,#A5,#A6,#A7").animate({
//         'opacity': '0'
//     }, 300);
//     $(window).delay(1000).scrollTop(0);
// });

$(document).ready(function() {

    $.localScroll();

    $(".blank").delay(1000).fadeOut(300);
    $("#wrapper-logo,#wrapper-plus").delay(2000).animate({
        'opacity': '1'
    }, 300);
    $("#wrapper-A3,#A2").delay(2000).animate({
        'opacity': '1'
    }, 300);
});

/*CLICK PLUS AND CROSS MENU*/

var SS = document.getElementById('wrapper-plus');

SS.addEventListener('click', function() {
    $("#main-wrapper-menu").animate({
        'height': '100%'
    }, 500);
    $(".recent-post").delay(500).fadeIn(500);
    $(".category-post").delay(500).fadeIn(500);
    $("#wrapper-plus").fadeOut(250);
});

var WC = document.getElementById('wrapper-cross');

WC.addEventListener('click', function() {
    $("#main-wrapper-menu").animate({
        'height': '0'
    }, 500);
    $(".recent-post").fadeOut(250);
    $(".category-post").fadeOut(250);
    $("#wrapper-plus").delay(1000).fadeIn(250);
});

/*BUTTON LOGO*/

$(document).on('touchstart mouseover', '#wrapper-logo', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#wrapper-logo").stop().animate({
            'scale': '1.1',
            'opacity': '0.5'
        }, 200);

        event.handled = true;
    } else {
        return false;
    }
});

$(document).on('touchend mouseout', '#wrapper-logo', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#wrapper-logo").stop().animate({
            'scale': '1',
            'opacity': '1'
        }, 200);

        event.handled = true;
    } else {
        return false;
    }
});

/*BUTTON PLUS*/

$(document).on('touchstart mouseover', '#wrapper-plus', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#wrapper-plus").stop().animate({
            'opacity': '0.75',
            'scale': '1.1'
        }, 150);

        event.handled = true;
    } else {
        return false;
    }
});

$(document).on('touchend mouseout', '#wrapper-plus', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#wrapper-plus").stop().animate({
            'opacity': '1',
            'scale': '1'
        }, 150);

        event.handled = true;
    } else {
        return false;
    }
});

/*BUTTON CROSS*/

$(document).on('touchstart mouseover', '#wrapper-cross', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#wrapper-cross").stop().animate({
            'opacity': '0.75',
            'scale': '1.1'
        }, 150);

        event.handled = true;
    } else {
        return false;
    }
});

$(document).on('touchend mouseout', '#wrapper-cross', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#wrapper-cross").stop().animate({
            'opacity': '1',
            'scale': '1'
        }, 150);

        event.handled = true;
    } else {
        return false;
    }
});

/*BUTTON HOME*/

$(document).on('touchstart mouseover', '#wrapper-home', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#wrapper-home").stop().animate({
            'opacity': '0.75',
            'scale': '1.1'
        }, 150);

        event.handled = true;
    } else {
        return false;
    }
});

$(document).on('touchend mouseout', '#wrapper-home', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#wrapper-home").stop().animate({
            'opacity': '1',
            'scale': '1'
        }, 150);

        event.handled = true;
    } else {
        return false;
    }
});



/*BUTTON FACEBOOK*/

$(document).on('touchstart mouseover', '#main-facebook', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#facebook").stop().css({
            'color': '#FFF'
        });
        $("#cadre-facebook").stop().css({
            'background-color': '#7A9DED'
        });

        event.handled = true;
    } else {
        return false;
    }
});

$(document).on('touchend mouseout', '#main-facebook', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#facebook").stop().css({
            'color': '#66676D'
        });
        $("#cadre-facebook").stop().css({
            'background-color': 'transparent'
        });

        event.handled = true;
    } else {
        return false;
    }
});

/*BUTTON DRIBBBLE*/

$(document).on('touchstart mouseover', '#main-dribbble', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#dribbble").stop().css({
            'color': '#FFF'
        });
        $("#cadre-dribbble").stop().css({
            'background-color': '#E29ADE'
        });


        event.handled = true;
    } else {
        return false;
    }
});

$(document).on('touchend mouseout', '#main-dribbble', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#dribbble").stop().css({
            'color': '#66676D'
        });
        $("#cadre-dribbble").stop().css({
            'background-color': 'transparent'
        });

        event.handled = true;
    } else {
        return false;
    }
});

/*BUTTON BEHANCE*/

$(document).on('touchstart mouseover', '#main-behance', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#behance").stop().css({
            'color': '#FFF'
        });
        $("#cadre-behance").stop().css({
            'background-color': '#606060'
        });


        event.handled = true;
    } else {
        return false;
    }
});

$(document).on('touchend mouseout', '#main-behance', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#behance").stop().css({
            'color': '#66676D'
        });
        $("#cadre-behance").stop().css({
            'background-color': 'transparent'
        });

        event.handled = true;
    } else {
        return false;
    }
});

/*BUTTON LINKED*/

$(document).on('touchstart mouseover', '#main-linked', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#linked").stop().css({
            'color': '#FFF'
        });
        $("#cadre-linked").stop().css({
            'background-color': '#516182'
        });


        event.handled = true;
    } else {
        return false;
    }
});

$(document).on('touchend mouseout', '#main-linked', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#linked").stop().css({
            'color': '#66676D'
        });
        $("#cadre-linked").stop().css({
            'background-color': 'transparent'
        });

        event.handled = true;
    } else {
        return false;
    }
});

/*BUTTON GOOGLE*/

$(document).on('touchstart mouseover', '#main-google', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#google").stop().css({
            'color': '#FFF'
        });
        $("#cadre-google").stop().css({
            'background-color': '#EA6E75'
        });

        event.handled = true;
    } else {
        return false;
    }
});

$(document).on('touchend mouseout', '#main-google', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#google").stop().css({
            'color': '#66676D'
        });
        $("#cadre-google").stop().css({
            'background-color': 'transparent'
        });

        event.handled = true;
    } else {
        return false;
    }
});

/*BUTTON PAGE2*/

$(document).on('touchstart mouseover', '#main-page2', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#page2").stop().css({
            'background-color': 'transparent',
            'border-color': '#51CE77'
        });
        $("#text-page2").stop().css({
            'color': '#51CE77'
        }, 250);
        $("#main-page2").stop().animate({
            'scale': '1.1'
        }, 250);

        event.handled = true;
    } else {
        return false;
    }
});

$(document).on('touchend mouseout', '#main-page2', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#page2").stop().css({
            'background-color': '#51CE77',
            'border-color': '#51CE77'
        });
        $("#text-page2").stop().css({
            'color': '#FFF'
        }, 250);
        $("#main-page2").stop().animate({
            'scale': '1'
        }, 250);

        event.handled = true;
    } else {
        return false;
    }
});

/*BUTTON PAGE3*/

$(document).on('touchstart mouseover', '#main-page3', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#page3").stop().css({
            'background-color': 'transparent',
            'border-color': '#51CE77'
        });
        $("#text-page3").stop().css({
            'color': '#51CE77'
        }, 250);
        $("#main-page3").stop().animate({
            'scale': '1.1'
        }, 250);

        event.handled = true;
    } else {
        return false;
    }
});

$(document).on('touchend mouseout', '#main-page3', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#page3").stop().css({
            'background-color': '#51CE77',
            'border-color': '#51CE77'
        });
        $("#text-page3").stop().css({
            'color': '#FFF'
        }, 250);
        $("#main-page3").stop().animate({
            'scale': '1'
        }, 250);

        event.handled = true;
    } else {
        return false;
    }
});

/*BUTTON PAGE4*/

$(document).on('touchstart mouseover', '#main-page4', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#page4").stop().css({
            'background-color': 'transparent',
            'border-color': '#51CE77'
        });
        $("#text-page4").stop().css({
            'color': '#81E2A1'
        }, 250);
        $("#main-page4").stop().animate({
            'scale': '1.1'
        }, 250);

        event.handled = true;
    } else {
        return false;
    }
});

$(document).on('touchend mouseout', '#main-page4', function(event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {

        $("#page4").stop().css({
            'background-color': '#51CE77',
            'border-color': '#51CE77'
        });
        $("#text-page4").stop().css({
            'color': '#FFF'
        }, 250);
        $("#main-page4").stop().animate({
            'scale': '1'
        }, 250);

        event.handled = true;
    } else {
        return false;
    }
});