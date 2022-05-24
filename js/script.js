'use strict'
const burger = document.querySelector('.burger');
const body = document.body;
burger.addEventListener('click', function() {
  let mainNav = document.querySelector('.menu__list');
  let burgerSpan = document.querySelector('.burger::after');


  mainNav.classList.toggle('active');
  burger.classList.toggle('active')
  body.classList.toggle('lock');
  // alert('asdsda');
})

/* ************** scroll ************** */
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

let lastScrollTop = 100;


window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance > lastScrollTop) {
		header.classList.add('header_hidden');


	} else {
    header.classList.remove('header_hidden');
	}

	if (scrollDistance === 0) {
		header.classList.remove('header_hidden');
	}

	lastScrollTop = scrollDistance;
});
