document.addEventListener('DOMContentLoaded', () => {
	const modalLink = document.querySelectorAll('.modal-link')

	const closeModalBtn = document.querySelectorAll('[data-action=close]')
	const modalBg = document.querySelectorAll('.modal-bg')
	

	const clickModalHandler = e => {
		const modalID = e.target.closest('.modal-link').getAttribute('for')
		const modal = document.querySelector(modalID)

		modalLink.forEach( item => {
			const modalIDItem = item.closest('.modal-link').getAttribute('for')
			console.log(modalIDItem)
			const modalItem = document.querySelector(modalIDItem)
			if (modalItem){
				modalItem.classList.remove('active')
			}
		})

		modal.classList.add('active')
	}

	const clickCloseBtnHandler = e => {
		console.log(e)
		const modal = e.target.closest('.modal')
		modal.classList.remove('active')
	}

	modalLink.forEach(item => item.addEventListener('click', clickModalHandler))
	closeModalBtn.forEach(item => item.addEventListener('click', clickCloseBtnHandler))
	modalBg.forEach(item => item.addEventListener('click', clickCloseBtnHandler))
});