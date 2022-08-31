document.addEventListener('DOMContentLoaded', () => {
	const slider = document.querySelector('.items');
	const images = document.querySelectorAll('.item-img');
	let isDown = false;
	let startX;
	let scrollLeft;

	images.forEach(img => img.ondragstart = () => { return false })

	slider.addEventListener('mousedown', (e) => {
	  isDown = true;
	  slider.classList.add('active');
	  startX = e.pageX - slider.offsetLeft;
	  scrollLeft = slider.scrollLeft;
	});
	slider.addEventListener('mouseleave', () => {
	  isDown = false;
	  slider.classList.remove('active');
	});
	slider.addEventListener('mouseup', () => {
	  isDown = false;
	  slider.classList.remove('active');
	});
	slider.addEventListener('mousemove', (e) => {
	  if(!isDown) return;
	  e.preventDefault();
	  const x = e.pageX - slider.offsetLeft;
	  const walk = (x - startX) * 2; //scroll-fast
	  slider.scrollLeft = scrollLeft - walk;
	});
});