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
function createMain() {
  const main = document.createElement('main');

  main.appendChild(createMainContent());

  return main;
}

function createMainContent() {
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');

  const h1 = document.createElement('h1');

  mainContent.appendChild(h1);
  mainContent.appendChild(createMainText());

  return mainContent;
}

function createMainText() {
  const mainText = document.createElement('div');
  mainText.classList.add('main-text');

  const p = document.createElement('p');
  const subtext = document.createElement('p');
  subtext.classList.add('subtext');
  const button = document.createElement('button');

  mainText.appendChild(p);
  mainText.appendChild(subtext);
  mainText.appendChild(button);

  return mainText;
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

export { createHeader, createMain, createFooter };
