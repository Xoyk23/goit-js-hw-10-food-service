import templates from '../tempaltes/template-menu-item.hbs';

import menu from '../menu.json';

const renderMarkup = templates(menu);

const menuListRef = document.querySelector('.menu');

menuListRef.insertAdjacentHTML('beforeend', renderMarkup);
