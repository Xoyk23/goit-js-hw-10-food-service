const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');

const switcherRef = document.querySelector('#theme-switch-toggle');

localStorage.setItem('themeVariants', JSON.stringify(Theme));

const savedThemeVariants = localStorage.getItem('themeVariants');

const parsedThemeVariants = JSON.parse(savedThemeVariants);

let currentParsedTheme = localStorage.getItem('currentTheme');

if (localStorage.getItem('currentTheme') === null) {
  bodyRef.classList.add(parsedThemeVariants.LIGHT);
  // switcherRef.checked = false;
} else {
  bodyRef.classList.add(currentParsedTheme);
}

if (bodyRef.classList.contains(parsedThemeVariants.DARK)) {
  switcherRef.checked = true;
}

switcherRef.addEventListener('change', themeSwitch);

console.log(bodyRef);

function themeSwitch() {
  console.log('Поменяли тему');
  if (bodyRef.classList.contains(parsedThemeVariants.DARK)) {
    bodyRef.classList.replace(
      parsedThemeVariants.DARK,
      parsedThemeVariants.LIGHT,
    );
    localStorage.setItem('currentTheme', bodyRef.className);
    console.log('Блиать!');
    switcherRef.checked = false;
  } else {
    bodyRef.classList.replace(
      parsedThemeVariants.LIGHT,
      parsedThemeVariants.DARK,
    );
    localStorage.setItem('currentTheme', bodyRef.className);
    switcherRef.checked = true;
  }
}

// 1 Записать в локал сторедж темы
// 2 Опредилить сохранёную тему
// 3 Распарсить Сохр тему
