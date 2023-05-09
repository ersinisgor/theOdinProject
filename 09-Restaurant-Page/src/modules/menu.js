import { createHeader, createFooter } from './components';

function menu_createMain() {
  const main = document.createElement('main');
  main.classList.add('menu-main');

  main.appendChild(menu_createMainContent());

  return main;
}

function menu_createMainContent() {
  const mainContent = document.createElement('div');
  mainContent.classList.add('menu-main-content');

  const h1 = document.createElement('h1');
  h1.innerText = 'Menu';

  const hr = document.createElement('hr');

  mainContent.appendChild(h1);
  mainContent.appendChild(hr);
  mainContent.appendChild(menu_createMainText());

  return mainContent;
}

function menu_createMainText() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  return menuContainer;
}

function loadMenu() {
  content.innerHTML = '';

  content.appendChild(createHeader());
  content.appendChild(menu_createMain());
  content.appendChild(createFooter());
}

export default loadMenu;
