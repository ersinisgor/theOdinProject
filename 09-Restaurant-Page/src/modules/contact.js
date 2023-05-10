import { createHeader, createFooter, content } from './components';

function contact_createMain() {
  const main = document.createElement('main');

  const mainContainer = document.createElement('div');
  mainContainer.classList.add('contact-main');

  main.appendChild(mainContainer);
  mainContainer.appendChild(contact_createMainContent());

  return main;
}

function contact_createMainContent() {
  const mainContent = document.createElement('div');
  mainContent.classList.add('contact-main-content');

  const tel = document.createElement('p');
  tel.classList.add('tel');
  tel.innerText = `☎ +90 266 11 22 333`;

  const address = document.createElement('p');
  address.classList.add('address');
  address.innerText = `🏠 Atatürk Boulevard 15, Istanbul, TURKEY`;

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const location = document.createElement('img');
  location.classList.add('location');
  location.src = `../dist/img/Location.jpg`;
  imageContainer.appendChild(location);

  mainContent.appendChild(tel);
  mainContent.appendChild(address);
  mainContent.appendChild(imageContainer);

  return mainContent;
}

function loadContact() {
  content.innerHTML = '';

  content.appendChild(createHeader());
  content.appendChild(contact_createMain());
  content.appendChild(createFooter());
}

export default loadContact;
