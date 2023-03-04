'use strict';
const section = document.querySelector('section');

const addBook = document.querySelector('.add-book');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

// const title = document.querySelector('#title');
// const author = document.querySelector('#author');
// const page = document.querySelector('#page');
const hasItBeenRead = document.querySelector('#read');
const addBookInput = document.querySelector('.add');

//Create Card

// console.log(addBookInput);

/*----------OPEN AND CLOSE FORM CARD----------*/
addBook.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal();
  }
}

const signin = document.querySelector('.sign-in');
signin.addEventListener('click', createCard);

function createCard() {
  const cardDiv = document.createElement('div');
  const titleLabelDiv = document.createElement('div');
  const titleDiv = document.createElement('div');
  const authorLabelDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const pageLabelDiv = document.createElement('div');
  const pageDiv = document.createElement('div');
  const readDiv = document.createElement('div');
  const removeDiv = document.createElement('button');

  cardDiv.classList.add('card');
  titleLabelDiv.classList.add('book-label');
  titleDiv.classList.add('book-title');
  authorLabelDiv.classList.add('book-label');
  authorDiv.classList.add('book-author');
  pageLabelDiv.classList.add('book-label');
  pageDiv.classList.add('book-page');
  readDiv.classList.add('book-read');

  titleLabelDiv.innerText = 'Title';
  authorLabelDiv.innerText = 'Author';
  pageLabelDiv.innerText = 'Page';
  removeDiv.innerHTML = 'Remove';

  section.appendChild(cardDiv);
  cardDiv.appendChild(titleLabelDiv);
  cardDiv.appendChild(titleDiv);
  cardDiv.appendChild(authorLabelDiv);
  cardDiv.appendChild(authorDiv);
  cardDiv.appendChild(pageLabelDiv);
  cardDiv.appendChild(pageDiv);
  cardDiv.appendChild(readDiv);
  cardDiv.appendChild(removeDiv);
}

/*----------TO TAKE INPUT FROM CLIENT----------*/
let myLibrary = [];

function Book(title, author, page) {
  this.title = title;
  this.author = author;
  this.page = page;
}

function addBookToLibrary() {
  // do stuff here
}

function getValue() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const page = document.querySelector('#page').value;

  const cardDiv = document.createElement('div');
  const titleLabelDiv = document.createElement('div');
  const titleDiv = document.createElement('div');
  const authorLabelDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const pageLabelDiv = document.createElement('div');
  const pageDiv = document.createElement('div');
  const readDiv = document.createElement('div');
  const removeDiv = document.createElement('button');

  cardDiv.classList.add('card');
  titleLabelDiv.classList.add('book-label');
  titleDiv.classList.add('book-title');
  authorLabelDiv.classList.add('book-label');
  authorDiv.classList.add('book-author');
  pageLabelDiv.classList.add('book-label');
  pageDiv.classList.add('book-page');
  readDiv.classList.add('book-read');

  titleLabelDiv.innerText = 'Title';
  authorLabelDiv.innerText = 'Author';
  pageLabelDiv.innerText = 'Page';
  removeDiv.innerHTML = 'Remove';

  section.appendChild(cardDiv);
  cardDiv.appendChild(titleLabelDiv);
  cardDiv.appendChild(titleDiv);
  cardDiv.appendChild(authorLabelDiv);
  cardDiv.appendChild(authorDiv);
  cardDiv.appendChild(pageLabelDiv);
  cardDiv.appendChild(pageDiv);
  cardDiv.appendChild(readDiv);
  cardDiv.appendChild(removeDiv);

  // const bookTitle = title.value;
  // const bookAuthor = author.value;
  // const bookPage = page.value;

  titleDiv.innerHTML = title;
  authorDiv.innerHTML = author;
  pageDiv.innerHTML = page;

  // return bookTitle, bookAuthor, bookPage;
}

addBookInput.addEventListener('click', getValue);
