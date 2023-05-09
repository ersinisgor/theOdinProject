import { createHeader, createFooter } from './components';

function contact_createMain() {
  const main = document.createElement('main');
  main.classList.add('contact-main');

  main.appendChild(contact_createMainContent());

  return main;
}

function contact_createMainContent() {
  const mainContent = document.createElement('div');
  mainContent.classList.add('contact-main-content');

  // const h1 = document.createElement('h1');
  // h1.innerText = 'Contact';

  // const hr = document.createElement('hr');

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

  // mainContent.appendChild(h1);
  // mainContent.appendChild(hr);
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
