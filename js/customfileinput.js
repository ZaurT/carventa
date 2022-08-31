document.addEventListener('DOMContentLoaded', () => {

	const customFileInputs = document.querySelectorAll('.hidden-file-input')
	console.log(customFileInputs)

	const fileInputHandlier = (e) => {
		const nameLimit = 12
		const fSize = e.target.files[0].size * 0.001

		let fName = e.target.files[0].name.substring(0, e.target.files[0].name.indexOf('.'))
		let fExt = e.target.files[0].name.substring(e.target.files[0].name.indexOf('.'), e.target.files[0].name.length)

		const fNameSum = fName.length > nameLimit ? fName.replace(fName, fName.substring(0, nameLimit) )+ '...' : fName
		console.log(fNameSum)

		const fInfoBlock = e.target.closest('.custom-file-input').querySelector('.file-info-holder')
		const fNameBlock = e.target.closest('.custom-file-input').querySelector('.file-name')
		const fSizeBlock = e.target.closest('.custom-file-input').querySelector('.file-size')

		fInfoBlock.style.display = 'block'
		fNameBlock.innerHTML = fNameSum + fExt.toLowerCase()
		fSizeBlock.innerHTML = parseInt(fSize) +'кб'
		
	}
	

	customFileInputs.forEach(item => item.addEventListener('change', fileInputHandlier))
		
});