document.addEventListener('DOMContentLoaded', () => {
	const showBtn = document.querySelectorAll('[data-action=show-active]')
	const inactiveEl = document.querySelectorAll('tr.inactive')

	const clickShowBtnHandler = e => {
		if (!e.target.closest('.link').classList.contains('items-hidden')){
			inactiveEl.forEach(item => item.style.display = 'none')
			e.target.closest('.link').classList.add('items-hidden')
		}else{
			inactiveEl.forEach(item => item.style.display = 'table-row')
			e.target.closest('.link').classList.remove('items-hidden')
		}
	}
	showBtn.forEach( item => item.addEventListener('click', clickShowBtnHandler) )
});