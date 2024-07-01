const containers = document.querySelectorAll('.input-container');
const form = document.querySelector('form');

const tl = gsap.timeline({defaults: {duration: 1}});

const start =
	'M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512';
const end =
	'M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512';

containers.forEach(container => {
	const input = container.querySelector('input');
	const line = container.querySelector('.elastic-line');
	const placeholder = container.querySelector('.placeholder');

	input.addEventListener('focus', () => {
		if (!input.value) {
			tl.fromTo(
				line,
				{attr: {d: start}},
				{
					attr: {d: end},
					ease: 'power2.easeOut',
					duration: 0.75,
				}
			);
			tl.to(line, {attr: {d: start}, ease: 'elastic.out(3, 0.5)'}, '<50%');

			tl.to(
				placeholder,
				{
					top: -20,
					left: 0,
					scale: 0.8,
					duration: 0.3,
					ease: 'power2.easeOut',
				},
				'<10%'
			);
		}
	});
});

form.addEventListener('click', () => {
	containers.forEach(container => {
		const input = container.querySelector('input');
		const line = container.querySelector('.elastic-line');
		const placeholder = container.querySelector('.placeholder');

		if (document.activeElement !== input) {
			if (!input.value) {
				gsap.to(placeholder, {
					top: 0,
					left: 0,
					scale: 1,
					duration: 0.5,
					ease: 'poser2.easeOut',
				});
			}
		}
		input.addEventListener('input', e => {
			if (e.target.type == 'text') {
				let inputText = e.target.value.trim();
				if (inputText.length > 2) colorize('#6391e8', line, placeholder);
				else colorize('#fe8c99', line, placeholder);
			}
			if (e.target.type == 'email') {
				let isValid = validateEmail(e.target.value.trim());
				if (isValid) colorize('#6391e8', line, placeholder);
				else colorize('#fe8c99', line, placeholder);
			}
			if (e.target.type == 'tel') {
				let isValid = validatePhone(e.target.value);
				if (isValid) colorize('#6391e8', line, placeholder);
				else colorize('#fe8c99', line, placeholder);
			}
		});
	});
});

function validateEmail(email) {
	let re = /\S+@\S+\.\S+/;
	return re.test(email);
}

function validatePhone(phone) {
	let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	return re.test(phone);
}

function colorize(color, line, placeholder) {
	gsap.to(line, {stroke: color, duration: 0.75});
	gsap.to(placeholder, {color, duration: 0.75});
}

const tl2 = gsap.timeline({defaults: {duration: 0.3, ease: 'power2.easeOut'}});

const checkbox = document.querySelector('.checkbox');
const tickMarkPath = document.querySelector('.tick-mark path');
const pathLength = tickMarkPath.getTotalLength();

gsap.set(tickMarkPath, {
	strokeDashoffset: pathLength,
	strokeDasharray: pathLength,
});

checkbox.addEventListener('click', () => {
	if (checkbox.checked) {
		tl2.to('.checkbox-fill', {top: 0});
		tl2.fromTo(
			tickMarkPath,
			{strokeDashoffset: pathLength},
			{strokeDashoffset: 0},
			'<50%'
		);
		tl2.to('.checkbox-label', {color: '#6391e8'}, '<');
	} else {
		tl2.fromTo(
			tickMarkPath,
			{strokeDashoffset: 0},
			{strokeDashoffset: pathLength}
		);
		tl2.to('.checkbox-fill', {top: '100%'}, '<30%');
		tl2.to('.checkbox-label', {color: '#c5c5c5'}, '<');
	}
});

gsap.set('#eye', {transformOrigin: 'center'});

gsap.fromTo(
	'#eye',
	{scaleY: 1},
	{
		scaleY: 0.3,
		repeat: -1,
		yoyo: true,
		repeatDelay: 0.5,
		ease: 'power2.easeOut',
	}
);

gsap.fromTo(
	'#eyebrow',
	{y: 0},
	{y: -1, repeat: -1, yoyo: true, repeatDelay: 0.5, ease: 'power2.easeOut'}
);

const button = document.querySelector('button');

const tl3 = gsap.timeline({defaults: {duration: 0.75, ease: 'power2.easeOut'}});

gsap.set('#hand', {transformOrigin: 'left'});

button.addEventListener('click', e => {
	e.preventDefault();
	tl3.to('.contact-right, .contact-left', {
		y: 30,
		opacity: 0,
		pointerEvents: 'none',
	});
	tl3.to('form', {scale: 0.8}, '<');
	tl3.fromTo('.submitted', {y: 30}, {opacity: 1, y: 0});

	gsap.fromTo(
		'#hand',
		{rotate: 0, y: 0},
		{
			rotate: -6,
			y: 2,
			ease: 'power2.easeout',
			duration: 0.5,
			delay: 1,
			repeat: -1,
			yoyo: true,
		}
	);
});
