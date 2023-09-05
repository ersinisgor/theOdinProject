'use strict';

// Selection of the "Add" button within the card element
const addBookInput = document.querySelector('.add');
addBookInput.addEventListener('click', addBookToLibrary);

const addBookForm = document.querySelector('form');

/*----------OPEN AND CLOSE FORM MODAL----------*/
// Selection of the "+" button on the screen and openning the modal when clicked
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

// Class definition for a book object
class Book {
  constructor(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
  }
}

// Array to store the books
let myLibrary = [];

// Function to add a new book
function addBookToLibrary(e) {
  e.preventDefault();

  // Retrieving information from the form
  const title = document.getElementById('book-name').value;
  const author = document.getElementById('author-name').value;
  const pageCount = document.getElementById('page-count').value;
  const read = document.getElementById('read-status').checked;

  // Creating a new book object
  const newBook = new Book(title, author, pageCount, read);

  // Adding the book object to the myLibrary array
  myLibrary.push(newBook);
  const index = myLibrary.indexOf(newBook);

  // Creating new "Card"
  const cardDiv = document.createElement('div');
  cardDiv.setAttribute('data-index', index);
  const section = document.querySelector('section');
  section.appendChild(cardDiv).classList.add('card');

  // Adding book information from myLibrary to the "Card"
  const titleLabelDiv = document.createElement('div');
  const titleDiv = document.createElement('div');
  const authorLabelDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const pageLabelDiv = document.createElement('div');
  const pageDiv = document.createElement('div');
  const readDiv = document.createElement('div');
  const removeDiv = document.createElement('button');

  cardDiv.appendChild(titleLabelDiv).classList.add('book-label');
  cardDiv.appendChild(titleDiv).classList.add('book-title');
  cardDiv.appendChild(authorLabelDiv).classList.add('book-label');
  cardDiv.appendChild(authorDiv).classList.add('book-author');
  cardDiv.appendChild(pageLabelDiv).classList.add('book-label');
  cardDiv.appendChild(pageDiv).classList.add('book-page');
  cardDiv.appendChild(readDiv).classList.add('book-read');
  cardDiv.appendChild(removeDiv).classList.add('remove');

  titleLabelDiv.innerText = 'Title';
  titleDiv.textContent = title;
  authorLabelDiv.innerText = 'Author';
  authorDiv.textContent = author;
  pageLabelDiv.innerText = 'Page';
  pageDiv.textContent = pageCount;

  // Adding class based on read status
  if (read) {
    readDiv.classList.add('read');
    readDiv.textContent = 'Read';
  } else {
    readDiv.classList.add('unread');
    readDiv.textContent = 'Unread';
  }
  readDiv.addEventListener('click', () => {
    toggleReadStatus(cardDiv);
  });

  removeDiv.textContent = 'Remove';
  removeDiv.addEventListener('click', () => {
    removeBook(index);
  });
  // const removeButtons = document.querySelectorAll('.remove');
  // removeButtons.forEach(removeButton => {
  //   removeButton.addEventListener('click', () => {
  //     removeBook(index);
  //   });
  // });

  const numberOfBooksEl = document.querySelector('.number-of-books');

  // const totalPagesEl = document.querySelector('.total-pages');

  // Updating the content of numberOfBooks and totalPages
  numberOfBooksEl.textContent = myLibrary.length;
  const totalPagesEl = document.querySelector('aside .total-pages');

  let total = 0;
  myLibrary.forEach(book => {
    total += Number(book.pageCount);
  });

  totalPagesEl.textContent = total;

  // Updating the content of readBook

  // readBookEl.textContent = myLibrary.filter(book => book.read === true).length;
  updateReadBook();

  // Resetting the form
  addBookForm.reset();
  // Closing the modal
  closeModal();
  // console.log(myLibrary);
  // console.log(removeButtons);
}

function toggleReadStatus(cardDiv) {
  const index = cardDiv.getAttribute('data-index');
  myLibrary[index].read = !myLibrary[index].read;
  const readDiv = cardDiv.querySelector('.book-read');
  readDiv.classList.toggle('read');
  readDiv.classList.toggle('unread');
  readDiv.textContent = myLibrary[index].read ? 'Read' : 'Unread';

  const readBookEl = document.querySelector('.read-book');
  // read-book içeriğini güncelleme
  readBookEl.textContent = myLibrary.filter(book => book.read === true).length;
}

function removeBook(index) {
  // myLibrary dizisinden kitabın silinmesi
  myLibrary.splice(index, 1);

  // Kartın DOM'dan kaldırılması
  const cards = document.querySelectorAll('.card');
  const cardToRemove = document.querySelector(`[data-index="${index}"]`);
  cardToRemove.remove();

  // Diğer kartların index numarasının güncellenmesi
  cards.forEach((card, i) => {
    const cardIndex = card.getAttribute('data-index');
    if (cardIndex > index) {
      card.setAttribute('data-index', cardIndex - 1);
      const readButton = card.querySelector('.book-read');
      readButton.removeEventListener('click', toggleReadStatus);
      readButton.addEventListener('click', () => {
        toggleReadStatus(card.getAttribute('data-index'));
      });
      const removeButton = card.querySelector('.remove');
      removeButton.removeEventListener('click', removeBook);
      removeButton.addEventListener('click', () => {
        removeBook(card.getAttribute('data-index'));
      });
    }
  });

  updateReadBook();
  updateTotalPages();
}

function updateTotalPages() {
  const totalPagesEl = document.querySelector('aside .total-pages');
  let total = 0;
  for (let i = 0; i < myLibrary.length; i++) {
    total += Number(myLibrary[i].pageCount);
  }
  totalPagesEl.textContent = total;
  const numberOfBooksEl = document.querySelector('.number-of-books');
  numberOfBooksEl.textContent = myLibrary.length;
}

function updateReadBook() {
  const readBookEl = document.querySelector('.read-book');
  let count = 0;
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].read === true) {
      count++;
    }
  }
  readBookEl.textContent = count;
}
