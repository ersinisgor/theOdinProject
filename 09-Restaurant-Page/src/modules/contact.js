import { createHeader, createFooter } from './components';

function contact_createMain() {
  const main = document.createElement('main');

  main.appendChild(contact_createMainContent());

  return main;
}

function contact_createMainContent() {
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');

  return mainContent;
}

function loadContact() {
  content.innerHTML = '';

  content.appendChild(createHeader());
  content.appendChild(contact_createMain());
  content.appendChild(createFooter());
}

export default loadContact;
