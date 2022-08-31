const infoBlock = document.querySelectorAll('.table-toggle-block .info-block')
const infoBlockClickHandler = (e) => {
	if(e.target.closest('div').classList.contains('right')) return

	const infoBlockClasses = e.target.closest('.info-block').classList

	if(!e.target.closest('.info-block').classList.contains('active')){
		infoBlock.forEach(item => item.classList.remove('active'))
		infoBlockClasses.add('active')
	}else{
		infoBlockClasses.remove('active')
	}
}
infoBlock.forEach(item => item.addEventListener('click', infoBlockClickHandler))


const tableLink = document.querySelectorAll('.table-link a')
const tableLinkHandlier = (e) => {
	const  toggleBlock = e.target.closest('.table-link-holder')

	toggleBlock.classList.toggle('active')
}
tableLink.forEach(item => item.addEventListener('click', tableLinkHandlier))