import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

const content = document.querySelector('#content');

document.addEventListener('click', e => {
  const target = e.target.innerText;

  if (target === 'Home') loadHome();
  if (target === 'Menu') loadMenu();
  if (target === 'Contact') loadContact();
});

loadHome();

export { content };
