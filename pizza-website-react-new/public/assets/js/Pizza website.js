const header = document.querySelector("header");


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');





const sr = ScrollReveal ({
	distance: '30px',
	duration: 2500,
	reset: true
})
sr.reveal('.home-text',{delay:200, origin:'left'});
sr.reveal('.home-img',{delay:200, origin:'right'});
sr.reveal('.container, .about, .menu, .contact',{delay:200, origin:'bottom'});
