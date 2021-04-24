import './style.css';

const navElm = document.querySelector('nav');

document.querySelector('#nav-btn').addEventListener('click', () => {
  navElm.classList.toggle('nav-closed');
});

const navItems = navElm.querySelectorAll('a');

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navElm.classList.add('nav-closed');
  });
});

document.querySelector('.order-btn').addEventListener('click', (e) => {
  const drinkCupElm = document.querySelector('.drink__cup');
  if (!drinkCupElm.classList.contains('drink__cup--selected')) {
    drinkCupElm.classList.add('drink__cup--selected');
    e.target.textContent = 'Zrušit';
  } else {
    drinkCupElm.classList.remove('drink__cup--selected');
    e.target.textContent = 'Objednat';
  }
});
