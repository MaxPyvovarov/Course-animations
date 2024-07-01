const timeline = gsap.timeline({
	defaults: {duration: 0.75, ease: 'power1.out'},
});

timeline.fromTo(
	'.cookie-container',
	{scale: 0},
	{scale: 1, ease: 'elastic.out(1, 0.4)', duration: 1.5}
);
timeline.fromTo(
	'.cookie',
	{opacity: 0, x: -50, rotate: -45},
	{opacity: 1, x: 0, rotate: 0},
	'<50%'
);
timeline.fromTo('.text', {x: 30, opacity: 0}, {x: 0, opacity: 1}, '<');

timeline.fromTo(
	'.cookie',
	{y: 0, rotate: 0},
	{y: -15, rotate: -10, yoyo: true, repeat: -1}
);

timeline.fromTo(
	'#crumbs',
	{y: 0, rotate: 0},
	{y: -10, rotate: -10, yoyo: true, repeat: -1},
	'<'
);

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
	gsap.to('.cookie-container', {
		opacity: 0,
		y: 100,
		duration: 0.75,
		ease: 'power1.out',
	});
});
