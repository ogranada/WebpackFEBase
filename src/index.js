
import { normalize } from 'normalize.css';
import { data } from './main.scss';

document.querySelector('.Header-menuTrigger').addEventListener('click', evt => {
  evt.stopPropagation();
  evt.preventDefault();
  document.querySelector('.Header-navigation').classList.toggle('isOpen');
});

document.querySelector('.Header-menuCloseTrigger').addEventListener('click', () => 
  document.querySelector('.Header-navigation').classList.remove('isOpen') );