$(document).ready(function () {
    $('.menu-trigger').click(function () {
        $('.mob-men').slideToggle();
    });
});
$(window).resize(function () {
    if ($(window).width() > 767) {
        $('.mob-men').removeAttr('style');
    }
});

// Slide

function theRotator() {
    setInterval('rotate()', 5000);
}

function rotate() {
    var current = ($('#top img.show') ? $('#top img.show') : $('#top:first'));
    var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('#top img:first') : current.next()) : $('#top img:first'));

    next.css({display: 'block'})
        .animate({opacity: 1.0}, 2000, function () {
            $(this).addClass('show');
        });
    current.animate({opacity: 0.0}, 2000, function () {
        $(this).removeClass('show');
    });

    // .next.css({opacity: 0.0})
    //     .addClass('show')
    //     .animate({opacity: 1.0}, 2000);
    // current.animate({opacity: 0.0}, 2000)
    //     .removeClass('show');
}

$(document).ready(function () {
    theRotator();
});