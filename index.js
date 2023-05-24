const searchIcon = document.getElementById('searchIcon');
    const searchInputContainer = document.getElementById('searchInputContainer');
    const menuIcon = document.getElementById('menuIcon');
    const menu = document.getElementById('menu');
    const fullscreenHeader = document.getElementById('fullscreenHeader');
    const closeFullscreenHeader = document.getElementById('closeFullscreenHeader');

    searchIcon.addEventListener('click', () => {
      searchInputContainer.classList.toggle('hidden');
    });

    menuIcon.addEventListener('click', () => {
      menu.classList.add('hidden');
      fullscreenHeader.classList.remove('hidden');
    });

    closeFullscreenHeader.addEventListener('click', () => {
      menu.classList.remove('hidden');
      fullscreenHeader.classList.add('hidden');
    });