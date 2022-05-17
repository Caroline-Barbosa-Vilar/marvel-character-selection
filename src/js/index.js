const characters = document.querySelectorAll('.character__item')

characters.forEach((character__item) => {
  character__item.addEventListener('mouseenter', () => {
    character__item.classList.add('selected')
  })
}) 