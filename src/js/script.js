//const { on } = require("gulp");
const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeMenu = document.querySelector('.menu__close'),
	menuLink = document.querySelector('.menu__link');



hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});
menuLink.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__rating-interest'),
	lines = document.querySelectorAll('.skills__rating-line span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});
