
import { normalize } from 'normalize.css';
import { data } from './main.scss';


document.querySelector('.DesignArea-widgetsMenuTrigger').addEventListener('click', (evt) => {
  evt.stopPropagation();
  evt.preventDefault();
  document.querySelector('.WidgetsMenu').classList.toggle('isHidden');
  evt.target.innerText = evt.target.innerText === '<' ? '>' : '<' ;
});
document.querySelector('.DesignArea-widgetsMenuTrigger').innerText = '<';
