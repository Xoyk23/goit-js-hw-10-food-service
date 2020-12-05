const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');

const switcherRef = document.querySelector('#theme-switch-toggle');

bodyRef.classList.add(Theme.LIGHT);

switcherRef.addEventListener('change', themeSwitch);
console.log(bodyRef);
function themeSwitch() {
  console.log('Поменяли тему');
  if (bodyRef.classList.contains(Theme.DARK)) {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    console.log('Блиать!');
    // bodyRef.classList.toggle(Theme.LIGHT);
  } else {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
  }
}

// 1 Записать в локал сторедж темы
// 2 Опредилить сохранёную тему
// 3 Распарсить Сохр тему
