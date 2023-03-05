'use strict';

/*----------OPEN AND CLOSE FORM CARD----------*/
const addBook = document.querySelector('.add-book');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

addBook.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
// window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

// function outsideClick(e) {
//   if (e.target == modal) {
//     closeModal();
//   }
// }

// ADD BUTTON WHICH IS INSIDE FORM ELEMENT
const addBookInput = document.querySelector('.add');
addBookInput.addEventListener('click', addBookToLibrary);

function createCard() {
  const section = document.querySelector('section');
  const cardDiv = document.createElement('div');
  const titleLabelDiv = document.createElement('div');
  const titleDiv = document.createElement('div');
  const authorLabelDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const pageLabelDiv = document.createElement('div');
  const pageDiv = document.createElement('div');
  const readDiv = document.createElement('div');
  const removeDiv = document.createElement('button');

  titleLabelDiv.innerText = 'Title';
  authorLabelDiv.innerText = 'Author';
  pageLabelDiv.innerText = 'Page';
  removeDiv.innerHTML = 'Remove';

  section.appendChild(cardDiv).classList.add('card');
  cardDiv.appendChild(titleLabelDiv).classList.add('book-label');
  cardDiv.appendChild(titleDiv).classList.add('book-title');
  cardDiv.appendChild(authorLabelDiv).classList.add('book-label');
  cardDiv.appendChild(authorDiv).classList.add('book-author');
  cardDiv.appendChild(pageLabelDiv).classList.add('book-label');
  cardDiv.appendChild(pageDiv).classList.add('book-page');
  cardDiv.appendChild(readDiv).classList.add('book-read');
  cardDiv.appendChild(removeDiv);
}

let myLibrary = [];

function Book(title, author, page) {
  this.title = title;
  this.author = author;
  this.page = page;
  // this.read = function () {
  //   if()
  // }
}

function addBookToLibrary(e) {
  e.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const page = document.querySelector('#page');
  const hasItBeenRead = document.querySelector('#read');

  const newBook = new Book(
    `${title.value}`,
    `${author.value}`,
    `${page.value}`
  );
  myLibrary.push(newBook);

  createCard();

  const allBookTitleClasses = document.querySelectorAll('.book-title');
  const lastBookTitleClassElement =
    allBookTitleClasses[allBookTitleClasses.length - 1];
  const allBookAuthorClasses = document.querySelectorAll('.book-author');
  const lastBookAuthorClassElement =
    allBookAuthorClasses[allBookAuthorClasses.length - 1];
  const allBookPageClasses = document.querySelectorAll('.book-page');
  const lastBookPageClassElement =
    allBookPageClasses[allBookPageClasses.length - 1];

  lastBookTitleClassElement.innerHTML = title.value;
  lastBookAuthorClassElement.innerHTML = author.value;
  lastBookPageClassElement.innerHTML = page.value;

  // title.innerText = '';
  // author.innerText = '';
  // page.innerText = '';

  clearInput();
  closeModal();

  console.log(myLibrary);
}

function clearInput() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const page = document.querySelector('#page');

  title.value = '';
  author.value = '';
  page.value = '';
}
