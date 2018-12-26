var mainNav = document.querySelector('.page-header__main-nav');
var navToggle = document.querySelector('.site-list__toggle');



if (mainNav.classList.contains('--no-js')) {
    mainNav.classList.remove('--no-js');
    mainNav.classList.add('--closed')
}
    
navToggle.addEventListener('click', function () {
    if (mainNav.classList.contains('--closed'))   {
        mainNav.classList.remove('--closed');
        mainNav.classList.add('--opened')
    } else {
        mainNav.classList.add('--closed');
        mainNav.classList.remove('--opened')
    }
})




