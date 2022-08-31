document.addEventListener('DOMContentLoaded', () => {
	const toggleBtn = document.querySelectorAll(".page-filter .item-toggle")
	const tr = document.querySelectorAll('.custom-table tr:not(.inactive)')
	const actionsBtn = document.querySelectorAll(".page-filter .actions")


	const clickTdHandler = e => {
		const elTr = e.target.closest("tr")
		const elTd = e.target.closest("td")
		if (!elTd) return

		if (!elTd.classList.contains('filter-cell')
		   	&& !elTr.classList.contains('inactive-blue', 'inactive')
		   	&& !e.target.classList.contains('modal-link')){

			if (elTr.classList.contains('selected')){
				tr.forEach(item => item.classList.remove('selected'))
				toggleBtn.forEach(item => item.style.display = 'inline-block')
				actionsBtn.forEach(item => item.style.display = 'none')
			}else{
				tr.forEach(item => item.classList.remove('selected'))
				elTr.classList.add('selected')
				toggleBtn.forEach(item => item.style.display = 'none')
				actionsBtn.forEach(item => item.style.display = 'inline-block')
			}
		}
			
	} 
	tr.forEach(item => item.addEventListener('click', clickTdHandler))
});