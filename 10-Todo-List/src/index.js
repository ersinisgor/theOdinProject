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
