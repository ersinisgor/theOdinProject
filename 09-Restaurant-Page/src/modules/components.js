function createHeader() {
  const header = document.createElement('header');

  // header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  const navbar = document.createElement('div');
  navbar.classList.add('navbar');
  nav.appendChild(navbar);

  const ul = document.createElement('ul');
  navbar.appendChild(ul);

  const li_home = document.createElement('li');
  li_home.setAttribute('id', 'home');
  li_home.innerText = 'Home';

  const li_menu = document.createElement('li');
  li_menu.setAttribute('id', 'menu');
  li_menu.innerText = 'Menu';

  const li_contact = document.createElement('li');
  li_contact.setAttribute('id', 'contact');
  li_contact.innerText = 'Contact';

  ul.appendChild(li_home);
  ul.appendChild(li_menu);
  ul.appendChild(li_contact);

  return nav;
}

function createMain() {
  const main = document.createElement('main');

  return main;
}

function createFooter() {
  const footer = document.createElement('footer');

  return footer;
}

export { createHeader, createMain, createFooter };
