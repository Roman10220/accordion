const accordionTitles = document.querySelectorAll('.accordion__title');

accordionTitles.forEach((accorTitle) => {
	accorTitle.addEventListener('click', () => {
		const height = accorTitle.nextElementSibling.scrollHeight;
		accorTitle.classList.toggle('accordion__title-active');
		if (accorTitle.classList.contains('accordion__title-active')) {
			accorTitle.nextElementSibling.style.maxHeight = `${height}px`;
		} else {
			accorTitle.nextElementSibling.style.maxHeight = '0px';
		}
	});
});