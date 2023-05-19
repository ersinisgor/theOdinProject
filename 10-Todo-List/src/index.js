const btnNav = document.querySelectorAll('.btn_nav');

btnNav.forEach(nav => {
  nav.addEventListener('click', selectProject);
});

function selectProject(e) {
  btnNav.forEach(select => {
    select.classList.remove('active');
  });
  e.target.classList.add('active');
  const el = e.target.parentElement;
  console.log(el);
}
