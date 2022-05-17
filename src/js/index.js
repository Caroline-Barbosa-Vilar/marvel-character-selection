const characters = document.querySelectorAll('.character__item')

characters.forEach((character__item) => {
  character__item.addEventListener('mouseenter', () => {

    const selectedId = character__item.attributes.id.value;

    if (selectedId === 'ultron') return;
    
    const selectedCharacter = document.querySelector('.selected')
    selectedCharacter.classList.remove('selected')

    character__item.classList.add('selected')
  })
}) 