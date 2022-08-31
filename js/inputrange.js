document.addEventListener('DOMContentLoaded', () => {

  // input range
  const el = document.querySelectorAll(".range-item")

  const updatePos = e => {
    const trackHolder = e.parentNode.querySelector('.track-holder')
    const thumb = e.parentNode.querySelector('.thumb');
    const inputPos = e.value / e.max * 100;

    trackHolder.setAttribute('data-pos', inputPos)


    e.parentNode.querySelector('.track').style.width = inputPos+'%';
    if (inputPos == 0) thumb.style.right = -thumb.offsetWidth+'px'

    thumb.style.right = (inputPos <= 25) ? -thumb.offsetWidth+'px' : '0px'

    showCurrentOption(e)
  }

  const showCurrentOption = (e) => { 
    const options = e.closest('.range-holder').querySelectorAll('.options .item')

    options.forEach(item => item.classList.remove('active'))
    options[e.value].classList.add('active')
  }

  const trackHandler = e => {
    updatePos(e.target)
  }

  el.forEach( item => {
    updatePos(item)
    item.addEventListener("input", trackHandler)
  })
});