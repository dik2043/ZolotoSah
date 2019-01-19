var mainNav = document.querySelector('.page-header__main-nav');
var navToggle = document.querySelector('.site-list__toggle');
var siteList = document.querySelector('.site-list');


if (mainNav.classList.contains('--no-js')) {
    mainNav.classList.remove('--no-js');
    mainNav.classList.add('--closed-start');
}
    
navToggle.addEventListener('click', function () {
    if (mainNav.classList.contains('--closed-start')) {
        mainNav.classList.remove('--closed-start');
        mainNav.classList.add('--opened');
    } else if (mainNav.classList.contains('--closed'))   {
        mainNav.classList.remove('--closed');
        mainNav.classList.add('--opened');        
    } else {
        mainNav.classList.add('--closed');
        mainNav.classList.remove('--opened')
    }
});

function closeNav() {
    mainNav.classList.add('--closed');
    mainNav.classList.remove('--opened')
}


// mainNav.classList.remove('--closed-start');
// mainNav.classList.add('--opened');

