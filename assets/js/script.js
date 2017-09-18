
$(function () {
    $('.arrow_right').on('click', function () {
        var currentImage = $('.img.first');
        var currentImageIndex = $('.img.first').index();
        var nextImageIndex = currentImageIndex +1;
        var nextImage = $('.img').eq(nextImageIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('first');

        if (nextImageIndex === ($('.img:last').index()+1)) {
            $('.img').eq(0).fadeIn(1000);
           $('.img').eq(0).addClass('first');
        }else {
            nextImage.fadeIn(1000);
            nextImage.addClass('first');
        }
    });

    $('.arrow_left').on('click', function () {
        var currentImage = $('.img.first');
        var currentImageIndex = $('.img.first').index();
        var prevImageIndex = currentImageIndex -1;
        var prevImage = $('.img').eq(prevImageIndex);

        currentImage.fadeOut(1000);
        currentImage.removeClass('first');
        prevImage.fadeIn(1000);
        prevImage.addClass('first');

    });
});