document.getElementById('ham-menu').addEventListener('click', function () {
	// Trigger animation when ham button is clicked
	document.getElementById('ham-menu').classList.toggle('active');

	// Display navbar menu when ham button is clicked
	document.getElementById('navigation-menu').classList.toggle('show-menu');
	document.getElementById('nav-container').classList.toggle('show-menu');
});
