const tl = gsap.timeline({defaults: {duration: 0.3, ease: 'power2.easeOut'}});

const home = document.querySelector('.home');

gsap.set('.feather', {scale: 0, transformOrigin: 'center'});

home.addEventListener('click', () => {
	gsap.fromTo('.home-svg', {scale: 1}, {scale: 0.9, yoyo: true, repeat: 1});
	gsap.fromTo(
		'.feather',
		{y: -5, scale: 0},
		{y: 20, scale: 1.5, duration: 0.7, stagger: 0.2}
	);
	gsap.fromTo('.right-feather', {x: 0}, {x: 5});
});

const notifications = document.querySelector('.notifications');

gsap.set('.bell', {transformOrigin: 'top center'});
gsap.set('.ringer', {transformOrigin: 'top center'});
gsap.set('.wave', {opacity: 0, transformOrigin: 'bottom'});

notifications.addEventListener('click', () => {
	gsap.fromTo(
		'.bell',
		{rotate: -5},
		{rotate: 0, ease: 'elastic.out(3.5, 0.2)', duration: 2}
	);
	gsap.fromTo(
		'.ringer',
		{rotate: 3, x: 0.5},
		{rotate: 0, x: 0, ease: 'elastic.out(5, 0.2)', duration: 2}
	);
	gsap.fromTo(
		'.wave',
		{scale: 0, opacity: 1},
		{scale: 1.3, opacity: 0, duration: 0.6}
	);
});

const messages = document.querySelector('.messages');
gsap.set('.messages-svg', {overflow: 'visible'});
gsap.set('.flap', {transformOrigin: 'top'});

messages.addEventListener('click', () => {
	tl.fromTo('.messages-svg', {scale: 1}, {scale: 0.9, yoyo: true, repeat: 1});
	tl.fromTo('.flap', {scale: 1}, {scale: -1}, '<50%');
	tl.fromTo('.note', {y: 0, opacity: 1}, {y: -40, opacity: 0, duration: 0.75});
	tl.to('.flap', {scale: 1}, '<60%');
});
