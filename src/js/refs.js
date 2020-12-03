// Файл со всеми доступами

// Доступ к ul, где будут рендериться все элементы меню
const menuListRef = document.querySelector('.js-menu');

// Доступ к чекбоксу переключения темы
const checkBoxRef = document.getElementById('theme-switch-toggle');

// Доступ к body для добавления классов
const bodyRef = document.querySelector('body');

// Экспорт доступов
export { menuListRef, checkBoxRef, bodyRef };
