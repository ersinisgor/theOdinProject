import { createMain, createHeader, createFooter } from './components';

function initialize() {
  const content = document.querySelector('#content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

export default initialize;
