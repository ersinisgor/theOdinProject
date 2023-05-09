import { createHeader, createFooter } from './components';

function menu_createMain() {
  const main = document.createElement('main');

  main.appendChild(menu_createMainContent());

  return main;
}

function menu_createMainContent() {
  const mainContent = document.createElement('div');
  // mainContent.classList.add('main-content');

  return mainContent;
}

function loadMenu() {
  content.innerHTML = '';

  content.appendChild(createHeader());
  content.appendChild(menu_createMain());
  content.appendChild(createFooter());
}

export default loadMenu;
