document.getElementById('ham-menu').addEventListener('click', function () {
	// Trigger animation when ham button is clicked
	document.getElementById('ham-menu').classList.toggle('active');

	// Display navbar menu when ham button is clicked
	document.getElementById('nav-container').classList.toggle('show-menu');

	document.getElementById('navigation-menu').classList.toggle('show-items');
});

window.addEventListener('resize', function () {
	let screenWidth = window.innerWidth;

	if (screenWidth > 991) {
		document
			.getElementById('navigation-menu')
			.classList.remove('show-items');

		document.getElementById('ham-menu').classList.remove('active');

		document.getElementById('nav-container').classList.remove('show-menu');
	}
});

let homeButton = document.getElementById('home-button');

if (window.scrollY < 50) {
	console.log(window.scrollY);
	homeButton.classList.add('home-button-active');
}

window.addEventListener('scroll', function () {
	console.log('scrolling');
	if (window.scrollY < 50) {
		window.setTimeout(function () {
			homeButton.classList.add('home-button-active');
		}, 500);
	} else {
		homeButton.classList.remove('home-button-active');
	}
});
