var slideIndex =1;
showslides = (slideIndex);

function plusSlides (n) {
    showslides = (slideIndex += n);
}
function currentSlide (n) {
    showslides = (slideIndex = n);
}
(function showslide(n) {
    var i;
    var slides = document.getElementsByClassName("camera");

    if (n >slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides [i].style.display = ("none")
    }

    slides[slideIndex -1].style.display = ("block");
})();

