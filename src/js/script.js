//const { on } = require("gulp");
const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeMenu = document.querySelector('.menu__close'),
	menuLink = document.querySelector('.menu__link'),
	promoLink = document.querySelector('.promo__link');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});
menuLink.addEventListener('click', () => {
    menu.classList.remove('active');
});
