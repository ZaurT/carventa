document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabs .tab');

  const tableClickHandler = (e) => {
    if (!e.target.closest('.tab').classList.contains('active')) {
      tabs.forEach(item => item.classList.remove('active'))
      e.target.closest('.tab').classList.add('active')
    }

  }

  tabs.forEach(item => item.addEventListener('click', tableClickHandler))
});