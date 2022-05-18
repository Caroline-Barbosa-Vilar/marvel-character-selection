const characters = document.querySelectorAll('.character__item');

characters.forEach((character__item) => {
  character__item.addEventListener('mouseenter', () => {

    const selectedId = character__item.attributes.id.value;

    if (selectedId === 'ultron') return;

    const selectedCharacter = document.querySelector('.selected');
    selectedCharacter.classList.remove('selected');

    character__item.classList.add('selected');

    const player1Image = document.getElementById('character-player-1');
    player1Image.src = `./src/img/${selectedId}.png`;

    const player1Name = document.getElementById('character__name-1');
    const selectedName = character__item.getAttribute('data-name');

    player1Name.innerHTML = selectedName;
  })
}) 