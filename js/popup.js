// var orderCall = document.querySelectorAll('.page-header__call');
var popup = document.querySelector('.popup');
var popupBack = document.querySelector('.popup__back');
var popupToggle = document.querySelector('.popup__toggle');


// orderCall[0].addEventListener('click', function() {
//     popup[0].classList.remove('unshow');
//     // dateInput.focus();
// });

function showPopup() {
    // popup.classList.remove('unshow');
    popup.classList.remove('popup__animation-up');
    popup.classList.add('popup__animation-down');
    popupBack.classList.remove('unshow');
}

popupToggle.addEventListener('click', function() {
    popup.classList.remove('popup__animation-down');
    popup.classList.add('popup__animation-up');
    popupBack.classList.add('unshow');
});

popupBack.addEventListener('click', function() {
    popup.classList.remove('popup__animation-down');
    popup.classList.add('popup__animation-up');
    popupBack.classList.add('unshow');
});

