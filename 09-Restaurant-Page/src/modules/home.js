import { createHeader, createFooter } from './components';
import { content } from '../index';
import loadMenu from './menu';

function home_createMain() {
  const main = document.createElement('main');

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('home-main');

  main.appendChild(mainContainer);
  mainContainer.appendChild(home_createMainContent());

  return main;
}

function home_createMainContent() {
  const mainContent = document.createElement('div');
  mainContent.classList.add('home-main-content');

  const h1 = document.createElement('h1');
  h1.innerText = 'Donald';

  const hr = document.createElement('hr');

  mainContent.appendChild(h1);
  mainContent.appendChild(hr);
  mainContent.appendChild(home_createMainText());

  return mainContent;
}

function home_createMainText() {
  const mainText = document.createElement('div');
  mainText.classList.add('main-text');

  const p = document.createElement('p');
  p.innerText = 'Welcome to Donald home page.';

  const subtext = document.createElement('p');
  subtext.classList.add('subtext');
  subtext.innerText =
    'We have been serving our customers with passion since 2002. Click to discover the best breakfast restaurant in the region';

  const button = document.createElement('button');
  button.innerText = 'Order Online';
  button.addEventListener('click', loadMenu);

  mainText.appendChild(p);
  mainText.appendChild(subtext);
  mainText.appendChild(button);

  return mainText;
}

function loadHome() {
  content.innerHTML = '';

  content.appendChild(createHeader());
  content.appendChild(home_createMain());
  content.appendChild(createFooter());
}

export default loadHome;
