document.addEventListener('DOMContentLoaded', () => {
	const showMoreBtn = document.getElementById('showMore');
	const itemsToShow = document.querySelectorAll("tr.hidden")
	

	const clickShowMoreHandler = () => {
		showMoreBtn.style.display = 'none'
		itemsToShow.forEach(item => item.classList.remove('hidden'))
	}

	showMoreBtn.addEventListener('click', clickShowMoreHandler)
});