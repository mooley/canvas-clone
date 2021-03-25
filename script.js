document.getElementById('ham-menu').addEventListener('click', function () {
	// Trigger animation when ham button is clicked
	document.getElementById('ham-menu').classList.toggle('active');

	// Display navbar menu when ham button is clicked
	document.getElementById('nav-container').classList.toggle('show-menu');

	document.getElementById('navigation-menu').classList.toggle('show-items');
});

function closeAll() {
	let screenWidth = window.innerWidth;

	if (screenWidth > 991) {
		document
			.getElementById('navigation-menu')
			.classList.remove('show-items');

		document.getElementById('ham-menu').classList.remove('active');

		document.getElementById('nav-container').classList.remove('show-menu');
	}
}

// Highlight home button when the home section is visible

window.addEventListener('resize', closeAll);

let homeButton = document.getElementById('home-button');

window.addEventListener('scroll', function () {
	if (window.scrollY < 50) {
		window.setTimeout(function () {
			homeButton.classList.add('home-button-active');
		}, 500);
	} else {
		homeButton.classList.remove('home-button-active');
	}
});
