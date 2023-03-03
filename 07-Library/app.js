const addBook = document.querySelector('.add-book');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

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

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
