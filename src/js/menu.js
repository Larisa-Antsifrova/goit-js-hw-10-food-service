import { menuListRef } from './refs.js';
import menu from '../menu.json';
import menuTemplate from '../templates/menu-item.hbs';

const menuMarkup = menuTemplate(menu);
menuListRef.insertAdjacentHTML('afterbegin', menuMarkup);
