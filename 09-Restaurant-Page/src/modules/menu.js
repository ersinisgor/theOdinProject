import { createHeader, createFooter, content } from './components';

function menu_createMain() {
  const main = document.createElement('main');

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('menu-main');

  main.appendChild(mainContainer);
  mainContainer.appendChild(menu_createMainContent());

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

  menuContainer.appendChild(createMenuItems('Omelet', 22));
  menuContainer.appendChild(createMenuItems('Sausage', 18));
  menuContainer.appendChild(createMenuItems('Pancake', 12));
  menuContainer.appendChild(createMenuItems('Croissant', 8));
  menuContainer.appendChild(createMenuItems('Eggs', 14));
  menuContainer.appendChild(createMenuItems('Bagel', 7));

  return menuContainer;
}

function createMenuItems(name, price) {
  const menuItems = document.createElement('div');
  menuItems.classList.add('menu-items');

  const menuImage = document.createElement('div');
  menuImage.classList.add('menu-image');
  const image = document.createElement('img');
  image.src = `../img/${name.toLowerCase()}.png`;
  menuImage.appendChild(image);

  const menuTitle = document.createElement('p');
  menuTitle.classList.add('menu-title');
  menuTitle.innerText = `${name}`;

  const menuText = document.createElement('p');
  menuText.classList.add('menu-text');
  menuText.innerText = 'Lorem ipsum dolor sit amet consectetur elit.';

  const menuPrice = document.createElement('p');
  menuPrice.classList.add('menu-price');
  menuPrice.innerText = `$${price}`;

  menuItems.appendChild(menuImage);
  menuItems.appendChild(menuTitle);
  menuItems.appendChild(menuText);
  menuItems.appendChild(menuPrice);

  return menuItems;
}

function loadMenu() {
  content.innerHTML = '';

  content.appendChild(createHeader());
  content.appendChild(menu_createMain());
  content.appendChild(createFooter());
}

export default loadMenu;
