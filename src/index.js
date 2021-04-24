import { Layer } from './Layer/index';
import './style.css';

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const nav = document.querySelector('nav');

document.querySelector('#nav-btn').addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
});

const navItems = nav.querySelectorAll('a');

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    nav.classList.add('nav-closed');
  });
});

document.querySelector('.order-btn').addEventListener('click', () => {
  const drinkCup = document.querySelector('.drink__cup');
  const drinkBtn = document.querySelector('.order-btn');

  if (!drinkCup.classList.contains('drink__cup--selected')) {
    drinkCup.classList.add('drink__cup--selected');
    drinkBtn.textContent = 'Zrušit';
  } else {
    drinkCup.classList.remove('drink__cup--selected');
    drinkBtn.textContent = 'Objednat';
  }
});

const drinkInfoElm = document.querySelector('.drink__info');

layers.forEach((layer) => {
  drinkInfoElm.innerHTML += Layer(layer);
});
