import { menuList } from './refs.js';
import menu from '../menu.json';
import menuTemplate from '../templates/menu-item.hbs';

console.log(menu);
console.log(menuList);
// console.log(menuTemplate);
const menuMarkup = menuTemplate(menu);
// console.log(menuMarkup);
menuList.insertAdjacentHTML('afterbegin', menuMarkup);
