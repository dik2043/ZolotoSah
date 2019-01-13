/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider__item");
    // console.log(slides);
    var links = document.getElementsByClassName("slider__link-item");
    var linksTab = document.getElementsByClassName("slider__link-item-tab");
    console.log(links);
    console.log(linksTab);
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" slider__link-item--active", "");
    }
    //для планшетной
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < linksTab.length; i++) {
        linksTab[i].className = linksTab[i].className.replace(" slider__link-item-tab--active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // slides[slideIndex - 1].classList.add('opacity');
    // slides[slideIndex - 1].style.opacity = "0.9";
    links[slideIndex - 1].className += " slider__link-item--active";
    linksTab[slideIndex - 1].className += " slider__link-item-tab--active";
}