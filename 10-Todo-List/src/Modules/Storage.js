//---Projeleri Construction Function olarak oluşturur
class Project {
  constructor(projectName, projectTodos) {
    this.projectName = projectName;
    this.projectTodos = projectTodos;
  }
}

//----Todo'ları Construction Function olarak oluşturur
class Todo {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    // this.todoIndex = 0;
  }
}

//----Oluşturulan todo'ları Array içine ekler
let todos = [
  new Todo('Pay the bills before evening', '', 'high', '13/12/2023'),
  new Todo('Go shopping after the work', '', 'medium', '21/06/2023'),
  new Todo(
    'Wash the dishes but first remember take the garbage can',
    '',
    'low',
    '05/03/2023'
  ),
  new Todo('Pay the bills before evening', '', 'medium', '16/02/2023'),
  new Todo(
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste consequuntur quam atmolestiae doloremque quas',
    '',
    'high',
    '31/04/2022'
  ),
];

export { todos, Todo };
