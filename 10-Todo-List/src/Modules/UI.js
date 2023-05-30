import { todos } from './Todo';

function initButtons() {
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

    //----Tıklanan Proje ismini display ekranında gösterir
    const topProjectName = document.querySelector('.top-project-name');
    topProjectName.textContent = `${project.innerText}`;
    return;
  }

  //----Add Todo butonuna tıkladığında todo-madal'ı açar
  const addTodoButton = document.querySelector('.add-todo');
  addTodoButton.addEventListener('click', openModal);
}

//------------------------------------------------------------------------------------------------------------------------
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

//------------------------------------------------------------------------------------------------------------------------
//---Add todo Modal içindeki priority'lere tıkladığında o priority'i seçer ve stilini değiştirir
const priorities = document.querySelectorAll(
  '.add-todo-modal-content .priority .box'
);

priorities.forEach(priority =>
  priority.addEventListener('click', function () {
    selectPriority(this);
  })
);

function selectPriority(priority) {
  priorities.forEach(box => (box.classList = ''));
  priorities.forEach(box => box.classList.add('box'));
  // priority.classList.add('selected');

  const sec = document.querySelector('input[name="priorityCheck"]:checked');
  if (sec) {
    priorities.forEach(box => (box.style.border = 'none'));
    if (priority.htmlFor === 'priorityLow') {
      priority.classList.add('low');
    } else if (priority.htmlFor === 'priorityMed') {
      priority.classList.add('med');
    } else if (priority.htmlFor === 'priorityHigh') {
      priority.classList.add('high');
    }
  }
  console.log(sec);
  // if (priority.classList === '.selected.low') {
  //   priority.classList.add('low');
  // } else if (priority.htmlFor === 'priorityMed') {
  //   priority.classList.add('med');
  // } else if (priority.htmlFor === 'priorityHigh') {
  //   priority.classList.add('high');
  // }
}

//------------------------------------------------------------------------------------------------------------------------
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

//---------------------------------------------------------------------------------------------------------------
// todoları ekranda gösterir
let todoIndex = 0;

function showTodosOnDisplay() {
  const todosDisplay = document.querySelector('.todos-display');

  for (let i = 0; i < todos.length; i++) {
    todosDisplay.appendChild(createTodoBar(todos[i]));
  }
}

showTodosOnDisplay();

//---- todo-bar'ın çerçevesini oluşturur
function createTodoBar(todo) {
  const todoBar = document.createElement('div');
  todoBar.classList.add('todo-bar');
  todoBar.setAttribute('data-index', `${todoIndex}`);

  const checkbox = document.createElement('input');
  checkbox.id = `todo-${todoIndex}`;
  checkbox.className = 'todo';
  checkbox.type = 'checkbox';

  //----Ekranda gösterilen todo'lara tıklandığında "yapıldı olarak" işaretler
  checkbox.addEventListener('click', function () {
    makeTodoComplete(this);
  });

  const todoLabel = document.createElement('label');
  todoLabel.classList.add('todo-label');
  todoLabel.htmlFor = `todo-${todoIndex}`;
  todoLabel.textContent = todo.title;

  const todoRightPanel = document.createElement('div');
  todoRightPanel.classList.add('todo-right-panel');

  const priority = document.createElement('div');
  priority.classList.add('priority');

  const box = document.createElement('div');
  box.className = `box ${todo.priority}`;
  box.textContent = todo.priority;

  const dueDate = document.createElement('div');
  dueDate.classList.add('todo-due-date');
  dueDate.textContent = todo.dueDate;

  const editSvgTag = `<svg class="svg_edit" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" width="64px"
  height="64px" fill="#6d335c" stroke="#6d335c">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <path style="fill:#aa8e8d;"
      d="M492.868,100.398c16.3,16.3,16.3,42.833,0,59.134l-82.775,82.775v242.665 c0,14.904-12.123,27.027-27.015,27.027H33.934c-14.904,0-27.027-12.123-27.027-27.027V114.733c0-3.275,1.298-6.426,3.621-8.737 L112.903,3.621C115.214,1.298,118.365,0,121.64,0h261.438c14.892,0,27.015,12.123,27.015,27.027v67.921l9.096-9.096 c16.3-16.3,42.833-16.3,59.134,0L492.868,100.398z M475.381,142.057c6.673-6.673,6.673-17.512,0-24.185l-14.533-14.533 c-6.673-6.673-17.512-6.673-24.185,0l-15.571,15.571l38.718,38.718L475.381,142.057z M244.691,372.748l197.645-197.645 l-38.718-38.718L205.972,334.03L244.691,372.748z M303.763,201.278l82.133-82.133c-0.346-1.112-0.519-2.299-0.519-3.522V27.027 c0-1.273-1.026-2.311-2.299-2.311H133.998v75.36c0,14.892-12.123,27.015-27.015,27.015h-75.36v357.881 c0,1.273,1.038,2.311,2.311,2.311h349.144c1.273,0,2.299-1.038,2.299-2.311V267.024L253.428,398.972 c-1.508,1.508-3.386,2.595-5.438,3.164c0,0-77.931,21.627-77.993,21.639c-0.395,0.111-3.102,0.408-3.114,0.408H103.56 c-6.822,0-12.358-5.524-12.358-12.358c0-6.822,5.536-12.358,12.358-12.358h53.931l19.093-68.736c0.568-2.064,1.656-3.93,3.164-5.438 l0.198-0.198H103.56c-6.822,0-12.358-5.536-12.358-12.358c0-6.822,5.536-12.358,12.358-12.358h101.102l74.384-74.384H103.56 c-6.822,0-12.358-5.524-12.358-12.358c0-6.822,5.536-12.358,12.358-12.358H303.763z M184.642,394.078l36.333-10.084l-26.249-26.249 L184.642,394.078z M109.282,100.077V42.203L49.11,102.375h57.873C108.256,102.375,109.282,101.35,109.282,100.077z">
    </path>
    <path style="fill:#6d335c;"
      d="M475.381,117.872c6.673,6.673,6.673,17.512,0,24.185l-15.571,15.571l-38.718-38.718l15.571-15.571 c6.673-6.673,17.512-6.673,24.185,0L475.381,117.872z">
    </path>
    <rect x="184.398" y="227.195" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 733.3798 205.3737)"
      style="fill:#6d335c;" width="279.515" height="54.759"></rect>
    <path style="fill:#f7edfa;"
      d="M385.895,119.145l-82.133,82.133H103.56c-6.822,0-12.358,5.536-12.358,12.358 c0,6.834,5.536,12.358,12.358,12.358h175.486l-74.384,74.384H103.56c-6.822,0-12.358,5.536-12.358,12.358 c0,6.822,5.536,12.358,12.358,12.358h76.386l-0.198,0.198c-1.508,1.508-2.595,3.374-3.164,5.438l-19.093,68.736H103.56 c-6.822,0-12.358,5.536-12.358,12.358c0,6.834,5.536,12.358,12.358,12.358h63.323c0.012,0,2.719-0.297,3.114-0.408 c0.062-0.012,77.993-21.639,77.993-21.639c2.051-0.568,3.93-1.656,5.438-3.164l131.948-131.948v217.949 c0,1.273-1.026,2.311-2.299,2.311H33.934c-1.273,0-2.311-1.038-2.311-2.311V127.092h75.36c14.892,0,27.015-12.123,27.015-27.015 v-75.36h249.079c1.273,0,2.299,1.038,2.299,2.311v88.596C385.376,116.847,385.549,118.033,385.895,119.145z">
    </path>
    <polygon style="fill:#6d335c;" points="220.975,383.994 184.642,394.078 194.727,357.745 ">
    </polygon>
    <path style="fill:#f7edfa;"
      d="M109.282,42.203v57.873c0,1.273-1.026,2.299-2.299,2.299H49.11L109.282,42.203z"></path>
  </g>
</svg>`;

  const deleteSvgTag = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" width="64px"
  height="64px" fill="#000000">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <g>
      <polygon style="fill:#f7edfa;"
        points="74.667,96.005 437.333,96.005 394.665,501.333 117.333,501.333 "></polygon>
      <rect x="53.333" y="53.333" style="fill:#aa8e8d;" width="405.333" height="42.667"></rect>
    </g>
    <g>
      <path style="fill:#6d335c;"
        d="M458.667,42.669h-128V32.004c0-17.647-14.354-32.004-32-32.004h-85.333 c-17.646,0-32,14.357-32,32.004v10.665h-128c-5.889,0-10.667,4.777-10.667,10.667v42.67c0,5.89,4.778,10.667,10.667,10.667h11.729 l40.421,383.995H74.667c-5.891,0-10.667,4.777-10.667,10.667S68.775,512,74.667,512h42.667h277.331 c0.179,0,0.356-0.017,0.533-0.025c0.164,0.007,0.33,0.025,0.496,0.025h42.665c5.891,0,10.667-4.776,10.667-10.667 s-4.775-10.667-10.667-10.667h-31.844l40.423-383.995h11.729c5.89,0,10.667-4.777,10.667-10.667v-42.67 C469.333,47.444,464.557,42.669,458.667,42.669z M202.667,32.004c0-5.885,4.785-10.671,10.667-10.671h85.333 c5.882,0,10.667,4.786,10.667,10.671v10.665H202.667V32.004z M64,64.002h384v21.337h-10.667H74.667H64V64.002z M385.062,490.667 H126.935L86.514,106.672h338.971L385.062,490.667z">
      </path>
      <path style="fill:#6d335c;"
        d="M256,469.33c5.889,0,10.667-4.777,10.667-10.667V177.332c0-5.89-4.778-10.667-10.667-10.667 c-5.891,0-10.667,4.777-10.667,10.667v281.331C245.333,464.555,250.109,469.33,256,469.33z">
      </path>
      <path style="fill:#6d335c;"
        d="M256,155.812c5.889,0,10.667-4.777,10.667-10.667v-6.475c0-5.891-4.778-10.667-10.667-10.667 c-5.891,0-10.667,4.777-10.667,10.667v6.475C245.333,151.037,250.109,155.812,256,155.812z">
      </path>
      <path style="fill:#6d335c;"
        d="M303.121,469.324c0.127,0.004,0.254,0.006,0.379,0.006c5.718,0,10.452-4.534,10.654-10.294 l0.265-7.582c0.204-5.888-4.402-10.827-10.29-11.033c-5.9-0.191-10.827,4.401-11.031,10.289l-0.265,7.582 C292.627,464.179,297.233,469.119,303.121,469.324z">
      </path>
      <path style="fill:#6d335c;"
        d="M304.592,427.141c0.127,0.004,0.254,0.006,0.379,0.006c5.718,0,10.452-4.533,10.654-10.294 l9.7-277.81c0.206-5.887-4.4-10.826-10.288-11.033c-5.906-0.175-10.827,4.401-11.034,10.289l-9.7,277.81 C294.098,421.997,298.704,426.936,304.592,427.141z">
      </path>
      <path style="fill:#6d335c;"
        d="M350.358,469.305c0.252,0.018,0.505,0.026,0.754,0.026c5.552,0,10.238-4.299,10.629-9.923 l22.377-319.993c0.411-5.876-4.021-10.974-9.898-11.385c-5.852-0.425-10.973,4.018-11.383,9.897L340.461,457.92 C340.05,463.796,344.481,468.894,350.358,469.305z">
      </path>
      <path style="fill:#6d335c;"
        d="M208.5,469.33c0.125,0,0.252-0.002,0.379-0.006c5.888-0.206,10.494-5.145,10.288-11.033 l-11.173-319.993c-0.206-5.888-5.146-10.467-11.034-10.289c-5.888,0.206-10.494,5.145-10.288,11.033l11.173,319.993 C198.048,464.797,202.781,469.33,208.5,469.33z">
      </path>
      <path style="fill:#6d335c;"
        d="M159.652,440.865c-5.877,0.412-10.306,5.509-9.895,11.386l0.502,7.157 c0.394,5.623,5.077,9.922,10.629,9.922c0.25,0,0.502-0.009,0.756-0.026c5.877-0.412,10.306-5.509,9.895-11.386l-0.502-7.157 C170.627,444.883,165.527,440.441,159.652,440.865z">
      </path>
      <path style="fill:#6d335c;"
        d="M147.482,419.69c0.394,5.625,5.077,9.923,10.629,9.923c0.25,0,0.502-0.009,0.754-0.026 c5.877-0.412,10.308-5.508,9.898-11.385l-19.602-280.275c-0.411-5.878-5.534-10.305-11.383-9.897 c-5.877,0.412-10.308,5.508-9.898,11.385L147.482,419.69z">
      </path>
    </g>
  </g>
</svg>`;

  const editSvgElement = document.createElement('div');
  editSvgElement.classList.add('edit');
  editSvgElement.innerHTML = editSvgTag;

  const deleteSvgElement = document.createElement('div');
  deleteSvgElement.classList.add('delete');
  deleteSvgElement.innerHTML = deleteSvgTag;

  todoBar.appendChild(checkbox);
  todoBar.appendChild(todoLabel);
  todoBar.appendChild(todoRightPanel);
  todoRightPanel.appendChild(priority);
  priority.appendChild(box);
  todoRightPanel.appendChild(dueDate);
  todoRightPanel.appendChild(editSvgElement);
  todoRightPanel.appendChild(deleteSvgElement);

  todoIndex += 1;

  return todoBar;
}
//---------------------------------------------------------------------------------------------------------------------------
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

export { initButtons, makeTodoComplete, openModal };
