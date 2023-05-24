import { todos } from './Storage';

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

function addTodoToArray() {}

// todoIndex = 0;

function addTodoToDisplay(title) {
  // const label = this.document.querySelector('label');
  console.log(title);
  // this.textContent = `${todos[0].title}`;
}

export { selectProject, makeTodoComplete };
