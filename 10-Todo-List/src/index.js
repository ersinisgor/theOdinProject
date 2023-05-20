const btnNav = document.querySelectorAll('.btn_nav');
const btnContainer = document.querySelectorAll('.btn-container');
const todos = document.querySelectorAll('.todo');

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

todos.forEach(todoCheck =>
  todoCheck.addEventListener('click', function () {
    makeTodoComplete(this);
  })
);

function makeTodoComplete(check) {
  check.checked
    ? check.nextElementSibling.classList.add('complete')
    : check.nextElementSibling.classList.remove('complete');
}
