let crossIcon = '../img/times-solid.svg';
let hamburgerIcon = '../img/bars-solid.svg';
let nav = document.querySelector('#navigation');
let hamburgerMenu = document.querySelector('#hamburgermenu');

hamburgerMenu.addEventListener('click', () => {
  if (nav.classList.contains('show')) {
    console.log('Menu closed');
    nav.classList.remove('slide-in');
    nav.classList.add('slide-out');
    setTimeout(() => {
      nav.classList.remove('show');
    }, 500);
    hamburgerMenu.src = hamburgerIcon;
  } else {
    console.log('Menu opened');
    nav.classList.add('slide-in');
    nav.classList.add('show');
    nav.classList.remove('slide-out');
    hamburgerMenu.src = crossIcon;
  }
});
