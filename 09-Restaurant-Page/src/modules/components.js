function createHeader() {
  const header = document.createElement('header');

  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  const navbar = document.createElement('div');
  navbar.classList.add('navbar');

  const ul = document.createElement('ul');

  const li_home = document.createElement('li');
  li_home.setAttribute('id', 'home');
  li_home.innerText = 'Home';

  const li_menu = document.createElement('li');
  li_menu.setAttribute('id', 'menu');
  li_menu.innerText = 'Menu';

  const li_contact = document.createElement('li');
  li_contact.setAttribute('id', 'contact');
  li_contact.innerText = 'Contact';

  nav.appendChild(navbar);
  navbar.appendChild(ul);
  ul.appendChild(li_home);
  ul.appendChild(li_menu);
  ul.appendChild(li_contact);

  return nav;
}

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

export { createHeader, createFooter };
