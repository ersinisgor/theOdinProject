export const initialPage = function () {
  const content = document.getElementById('content');

  const title = document.createElement('h1');
  const image = document.createElement('img');
  const text = document.createElement('p');

  title.innerText = 'How Wonderfull';
  image.setAttribute('src', '../img/res.jpg');
  image.style.width = '700px';
  text.innerText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, officiis! Quod, autem corrupti repudiandae a recusandae itaque explicabo. Aliquam, debitis alias repellendus vitae blanditiis molestias labore exercitationem? Nobis, iusto eaque.';

  content.appendChild(title);
  content.appendChild(image);
  content.appendChild(text);
};

export const contactPage = function () {
  const content = document.getElementById('content');

  const title = document.createElement('h1');
  const image = document.createElement('img');
  const text = document.createElement('p');

  title.innerText = 'Contact Us';
  image.setAttribute('src', '../img/cont.jpg');
  image.style.width = '700px';
  text.innerText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, officiis! Quod, autem corrupti repudiandae a recusandae itaque explicabo. Aliquam, debitis alias repellendus vitae blanditiis molestias labore exercitationem? Nobis, iusto eaque.';

  content.appendChild(title);
  content.appendChild(image);
  content.appendChild(text);
};

initialPage();
