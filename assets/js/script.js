
$(function () {
    $('.arrow_right').on('click', function () {
        var currentImage = $('.img.first');
        var currentImageIndex = $('.img.first').index();
        var nextImageIndex = currentImageIndex +1;
        var nextImage = $('.img').eq(nextImageIndex);
        currentImage.removeClass('first');

        if (nextImageIndex === ($('.img:last').index()+1)) {
           $('.img').eq(0).addClass('first');
        }else {
            nextImage.addClass('first');
        }
    });

    $('.arrow_left').on('click', function () {
        var currentImage = $('.img.first');
        var currentImageIndex = $('.img.first').index();
        var prevImageIndex = currentImageIndex -1;
        var prevImage = $('.img').eq(prevImageIndex);

        currentImage.removeClass('first');
        prevImage.addClass('first');

    });
});