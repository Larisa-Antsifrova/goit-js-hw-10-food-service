import { menuListRef } from './refs.js';
import menu from '../menu.json';
import menuTemplate from '../templates/menu-item.hbs';

// Создание разметки для всего массива объектов меню с помощью шаблонизатора
const menuMarkup = menuTemplate(menu);

// Добавление результата функции шаблонизатора в DOM
menuListRef.insertAdjacentHTML('afterbegin', menuMarkup);
