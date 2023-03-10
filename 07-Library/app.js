'use strict';

// Card öğesi içindeki "Ekle" düğmesinin seçilmesi
const addBookInput = document.querySelector('.add');
addBookInput.addEventListener('click', addBookToLibrary);

const addBookForm = document.querySelector('form');

/*----------OPEN AND CLOSE FORM MODAL----------*/
// Ekrandaki "+" düğmesinin seçilmesi ve tıklandığında "Modal" açılması
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

// Kitap objesi için sınıf tanımlaması
class Book {
  constructor(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
  }
}

// Kitapların saklandığı dizi
let myLibrary = [];

// Yeni kitap ekleme fonksiyonu
function addBookToLibrary(e) {
  e.preventDefault();

  // Formdaki bilgilerin alınması
  const title = document.getElementById('book-name').value;
  const author = document.getElementById('author-name').value;
  const pageCount = document.getElementById('page-count').value;
  const read = document.getElementById('read-status').checked;

  // Yeni kitap objesi oluşturulması
  const newBook = new Book(title, author, pageCount, read);

  // Kitap objesinin myLibrary dizisine eklenmesi
  myLibrary.push(newBook);
  const index = myLibrary.indexOf(newBook);

  // Yeni "Card" oluşturma
  const cardDiv = document.createElement('div');
  cardDiv.setAttribute('data-index', index);
  const section = document.querySelector('section');
  section.appendChild(cardDiv).classList.add('card');

  // myLibrary içindeki kitap bilgisinin "Card"a eklenmesi
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

  // Okunma bilgisine göre sınıf adı verilmesi
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
  const readBookEl = document.querySelector('.read-book');
  // const totalPagesEl = document.querySelector('.total-pages');
  // number-of-books ve total-pages içeriğini güncelleme
  numberOfBooksEl.textContent = myLibrary.length;
  const totalPagesEl = document.querySelector('aside .total-pages');

  let total = 0;
  myLibrary.forEach(book => {
    total += Number(book.pageCount);
  });

  totalPagesEl.textContent = total;

  // read-book içeriğini güncelleme
  readBookEl.textContent = myLibrary.filter(book => book.read === true).length;

  // Formun sıfırlanması
  addBookForm.reset();
  // Modal'ın kapatılması
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

// function displayIndex(index) {
//   const displayIndex = document.querySelector(`[data-index = "${index}"]`);
//   console.log(displayIndex);
// }

// function toggleReadStatus(index) {
//   myLibrary[index].read = !myLibrary[index].read;
//   const readDivs = document.querySelectorAll('.book-read');
//   readDivs[index].classList.toggle('read');
//   readDivs[index].classList.toggle('unread');
//   readDivs[index].textContent = myLibrary[index].read ? 'Read' : 'Unread';
// }

// function removeBook(index) {
//   const cardDiv = document.querySelectorAll('.card')[index];

//   myLibrary.splice(index, 1);
//   cardDiv.remove();
//   console.log(myLibrary);
// }

// removeBookFromLibrary fonksiyonu, tıklanan kartı siler

// "Remove" düğmelerine tıklanıldığında removeBookFromLibrary fonksiyonunu çağırın
// let removeButtons = document.querySelectorAll('.remove-button');
// removeButtons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     let card = button.parentNode.parentNode;
//     removeBookFromLibrary(card, index);
//     console.log(card);
//   });
// });

// "Remove" düğmelerine tıklanıldığında removeBookFromLibrary fonksiyonunu çağırın
// "Remove" düğmelerine tıklanıldığında removeBookFromLibrary fonksiyonunu çağırın
// "Remove" düğmelerine tıklanıldığında removeBookFromLibrary fonksiyonunu çağırın

// let removeButtons = document.querySelectorAll('.remove');
// removeButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     // düğmenin bağlı olduğu kitap kartını seçin
//     removeBook(index);
//     // let card = button.parentNode.parentNode;
//     // console.log(card);
//     // data-index özelliğini alın
//     // let index = card.getAttribute('data-index');
//     // myLibrary dizisinden ilgili objeyi silin
//     // myLibrary.splice(index, 1);
//     // ekrandan kartı silin
//     // card.remove();
//   });
// });

// function outsideClick(e) {
//   if (e.target == modal) {
//     closeModal();
//   }
// }

// Kitap kartı oluşturma fonksiyonu
// function createBookCard(title, author, page, read, index) {
//   const cardDiv = document.createElement('div');
//   const section = document.querySelector('section');
//   section.appendChild(cardDiv).classList.add('card');

//   const titleLabelDiv = document.createElement('div');
//   const titleDiv = document.createElement('div');
//   const authorLabelDiv = document.createElement('div');
//   const authorDiv = document.createElement('div');
//   const pageLabelDiv = document.createElement('div');
//   const pageDiv = document.createElement('div');
//   const readDiv = document.createElement('div');
//   const removeDiv = document.createElement('button');

//   cardDiv.appendChild(titleLabelDiv).classList.add('book-label');
//   cardDiv.appendChild(titleDiv).classList.add('book-title');
//   cardDiv.appendChild(authorLabelDiv).classList.add('book-label');
//   cardDiv.appendChild(authorDiv).classList.add('book-author');
//   cardDiv.appendChild(pageLabelDiv).classList.add('book-label');
//   cardDiv.appendChild(pageDiv).classList.add('book-page');
//   cardDiv.appendChild(readDiv).classList.add('book-read');
//   cardDiv.appendChild(removeDiv);

//   titleLabelDiv.innerText = 'Title';
//   titleDiv.innerHTML = title;
//   authorLabelDiv.innerText = 'Author';
//   authorDiv.innerHTML = author;
//   pageLabelDiv.innerText = 'Page';
//   pageDiv.innerHTML = page;

//   if (read) {
//     readDiv.classList.add('read');
//     readDiv.innerHTML = 'Read';
//   } else {
//     readDiv.classList.add('unread');
//     readDiv.innerHTML = 'Unread';
//   }
//   readDiv.addEventListener('click', function () {
//     toggleReadStatus(index);
//   });

//   removeDiv.innerHTML = 'Remove';
//   removeDiv.addEventListener('click', function () {
//     deleteBook(index);
//   });

//   return cardDiv;
// }

/* function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  const readDiv = bookList.childNodes[index].querySelectorAll('.add-book');
  readDiv.innerText = myLibrary[index].read ? 'Yes' : 'No';
}

function deleteBook(index) {
  // Kitabı myLibrary dizisinden sil
  myLibrary.splice(index, 1);

  // Local storage'dan sil
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));

  // Kartı sil
  const card = document.querySelector(`.card[data-index="${index}"]`);
  card.remove();
} */

// createBookCard('Salih', 'Necip', '300', true, 2);
// createBookCard('SAtiba', 'Abu', '500', false, 3);

/*-------------------------OLD SCRIPT--------------------------*/
// ADD BUTTON WHICH IS INSIDE FORM ELEMENT

/* const addBookInput = document.querySelector('.add');
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
} */

/* let myLibrary = [];

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read == true ? 'read' : 'Unread';
} */

/* function addBookToLibrary(e) {
  e.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const page = document.querySelector('#page');
  let hasItBeenRead = document.querySelector('#read');

  const newBook = new Book(
    `${title.value}`,
    `${author.value}`,
    `${page.value}`,
    `${hasItBeenRead.checked}`
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
  const allBookReadClasses = document.querySelectorAll('.book-read');
  const lastBookReadClassElement =
    allBookReadClasses[allBookReadClasses.length - 1];

  lastBookTitleClassElement.innerHTML = title.value;
  lastBookAuthorClassElement.innerHTML = author.value;
  lastBookPageClassElement.innerHTML = page.value;
  if (hasItBeenRead.checked == true) {
    lastBookReadClassElement.classList.add('read');
    lastBookReadClassElement.innerHTML = 'Read';
  } else {
    lastBookReadClassElement.classList.add('unread');
    lastBookReadClassElement.innerHTML = 'Unread';
  }

  clearInput();
  closeModal();

  console.log(myLibrary);
  console.log(hasItBeenRead.checked);
} */

// function getCheckboxValue() {
//   if (hasItBeenRead.checked == true) {
//   }
// }

/* function clearInput() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const page = document.querySelector('#page');
  const hasItBeenRead = document.querySelector('#read');

  title.value = '';
  author.value = '';
  page.value = '';
  hasItBeenRead.checked = false;
} */

/*----------REMOVE CARD----------*/

/* const remove = document.querySelectorAll('.card[button]');
console.log(remove);
 */
