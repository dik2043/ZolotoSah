var docImg = document.querySelectorAll('.documentation__img-big');
var docBack = document.querySelector('.documentation__back');


function showDocPopup(n) {
    docImg[n].classList.remove('unshow');
    docBack.classList.remove('unshow');
    docBack.addEventListener('click', function() {
        docBack.classList.add('unshow');
        docImg[n].classList.add('unshow');
    });
}

