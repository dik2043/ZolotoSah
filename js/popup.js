// var orderCall = document.querySelectorAll('.page-header__call');
var popup = document.querySelector('.popup');
var popupBack = document.querySelector('.popup__back');
var popupToggle = document.querySelector('.popup__toggle');


// orderCall[0].addEventListener('click', function() {
//     popup[0].classList.remove('unshow');
//     // dateInput.focus();
// });

function showPopup() {
    popup.classList.remove('unshow');
    popupBack.classList.remove('unshow');
}

popupToggle.addEventListener('click', function() {
    popup.classList.add('unshow');
    popupBack.classList.add('unshow');
});




// popup.classList.remove('unshow');
// popupBack.classList.remove('unshow');