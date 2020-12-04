import { checkBoxRef, bodyRef } from './refs.js';

// Опции темы
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Добавление слушателя события на чекбокс-переключатель темы
checkBoxRef.addEventListener('change', toggleTheme);

// Проверка сохранённой темы в localStorage
applyTheme();

// Функции
// Функция для проверки, есть ли сохранённые темы в localStorage
function applyTheme() {
  if (localStorage.theme === 'dark-theme') {
    bodyRef.classList.add(Theme.DARK);
    checkBoxRef.checked = true;
  } else {
    bodyRef.classList.add(Theme.LIGHT);
  }
}

// Функция для переключения темы по чекбоксу
function toggleTheme(event) {
  bodyRef.classList.toggle(Theme.LIGHT);
  bodyRef.classList.toggle(Theme.DARK);

  if (event.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
