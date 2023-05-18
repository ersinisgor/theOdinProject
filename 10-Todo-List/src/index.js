const btnContainer = document.querySelectorAll('.btn-container');

btnContainer.forEach(nav => {
  nav.addEventListener('click', selectProject);
});

function selectProject(e) {
  btnContainer.forEach(select => {
    select.classList.remove('active');
  });
  e.target.parentElement.classList.add('active');
}
