// import homeMainContent from './home';
import loadHome from './home';

const content = document.querySelector('#content');

/*----HEADER----*/
function createHeader() {
  const header = document.createElement('header');

  header.appendChild(createNav());

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

/*----MAIN----*/

function menuMain() {
  const main = document.createElement('main');

  main.appendChild(menuMainContent());

  return main;
}

function contactMain() {
  const main = document.createElement('main');

  main.appendChild(contactMainContent());

  return main;
}

function menuMainContent() {
  const mainContent = document.createElement('div');
  // mainContent.classList.add('main-content');

  return mainContent;
}

function contactMainContent() {
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');

  return mainContent;
}

/*----FOOTER----*/
function createFooter() {
  const footer = document.createElement('footer');

  footer.innerHTML = `<p>
          Copyright ©
          <script>
            document.write(new Date().getFullYear());
          </script>
          Created by <b><i>ersinisgor </i></b>
        </p>
        <a href="https://github.com/ersinisgor" target="_blank">
          <i class="fab fa-github"></i
        ></a>`;

  return footer;
}

function loadMenu() {
  content.innerHTML = '';

  content.appendChild(createHeader());
  content.appendChild(menuMain());
  content.appendChild(createFooter());
}

function loadContact() {
  content.innerHTML = '';

  content.appendChild(createHeader());
  content.appendChild(contactMain());
  content.appendChild(createFooter());
}

document.addEventListener('click', e => {
  const target = e.target.innerText;

  if (target === 'Home') loadHome();
  if (target === 'Menu') loadMenu();
  if (target === 'Contact') loadContact();
});

loadHome();
export { createHeader, createFooter };
