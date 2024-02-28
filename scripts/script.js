// Hamburgermenu variables
let crossIcon = '../img/times-solid.svg';
let hamburgerIcon = '../img/bars-solid.svg';
let nav = document.querySelector('#navigation');
let hamburgerMenu = document.querySelector('#hamburgermenu');

// hamburger eventlistener for opening and closing the menu on mobile devices and changing the icon from hamburger to cross and vice versa when the menu is opened or closed
hamburgerMenu.addEventListener('click', () => {
  if (nav.classList.contains('show')) {
    console.log('Menu closed');
    nav.classList.remove('slide-in');
    nav.classList.add('slide-out');
    setTimeout(() => {
      nav.classList.remove('show');
    }, 500);
    hamburgerMenu.src = hamburgerIcon;
    setTimeout(() => {
      console.clear();
    }, 1000);
  } else {
    console.log('Menu opened');
    nav.classList.add('slide-in');
    nav.classList.add('show');
    nav.classList.remove('slide-out');
    hamburgerMenu.src = crossIcon;
  }
});

// Submenu variables
let submenubtn = document.querySelector('#submenu-btn');
let submenu = document.querySelector('#submenu');
let arrow = document.querySelector('#arrow');

// Submenu eventlistener for opening and closing the submenu on mobile devices
submenubtn.addEventListener('click', () => {
  if (submenu.classList.contains('show')) {
    console.log('Submenu closed');
    arrow.classList.remove('open');
    submenu.classList.remove('show');
  } else {
    console.log('Submenu opened');
    submenu.classList.add('show');
    arrow.classList.add('open');
  }
});
