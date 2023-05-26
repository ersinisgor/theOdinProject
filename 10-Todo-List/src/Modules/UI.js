import { todos } from './Todo';

//-----Nav alanında hangi projeye tıklandığını gösterir
const btnNav = document.querySelectorAll('.btn_nav');
const btnContainer = document.querySelectorAll('.btn-container');

btnNav.forEach(nav =>
  nav.addEventListener('click', function () {
    selectProject(this);
  })
);

function selectProject(project) {
  const buttons = [...btnNav, ...btnContainer];

  buttons.forEach(nav => nav.classList.remove('active'));
  project.classList.add('active');
  project.parentElement.classList.add('active');
}

//----Todo'lara tıklanıldığında "todo-bar" ve "label"a "complete" sınıfını ekler
function makeTodoComplete(check) {
  if (check.checked) {
    check.parentElement.classList.add('complete');
    check.nextElementSibling.classList.add('complete');
  } else {
    check.parentElement.classList.remove('complete');
    check.nextElementSibling.classList.remove('complete');
  }
}

// Ekle butonuna tıklandığında todo girişi formunu açar
function openModal() {
  const overlayAddTodoModal = document.querySelector('.overlay-add-todo-modal');
  // const addTodoModal = document.querySelector('.add-todo-modal');
  overlayAddTodoModal.classList.add('open');
  overlayAddTodoModal.firstElementChild.classList.add('open');
  // addTodoModal.classList.add('open');
}

// Çarpı butonuna tıklandığında todo girişi formunu kapatır
const closeMark = document.querySelector('.fa-circle-xmark');
closeMark.addEventListener('click', closeModal);

function closeModal() {
  const overlayAddTodoModal = document.querySelector('.overlay-add-todo-modal');

  overlayAddTodoModal.classList.remove('open');
  overlayAddTodoModal.firstElementChild.classList.remove('open');
}

// function createFormElement() {
//   const main = document.querySelector('main');
//   const nav = document.querySelector('nav');

//   const addTodoModal = document.createElement('div');
//   addTodoModal.classList.add('add-todo-modal');

//   main.insertBefore(addTodoModal, nav);
// }

// function openTodoForm() {
//   createFormElement();
// }

// function getTodoInfo(){
//   openTodoForm();
// }

// function addTodo() {
//   getTodoInfo();
//   createNewTodo();
// }

export { selectProject, makeTodoComplete, openModal };
