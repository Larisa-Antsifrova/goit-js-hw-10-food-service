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
  if (localStorage.theme) {
    bodyRef.classList.add(localStorage.theme);
    if (localStorage.theme === 'dark-theme') {
      checkBoxRef.checked = true;
    }
  } else {
    bodyRef.classList.add(Theme.LIGHT);
  }
}

// Функция для переключения темы по чекбоксу
function toggleTheme() {
  bodyRef.classList.toggle('light-theme');
  bodyRef.classList.toggle('dark-theme');

  if (bodyRef.classList.contains('dark-theme')) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
