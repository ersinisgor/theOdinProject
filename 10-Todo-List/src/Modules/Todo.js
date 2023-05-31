//----Todo'ları Construction Function olarak oluşturur
class Todo {
  constructor(title, priority, dueDate) {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
  }
}

//----Oluşturulan todo'ları Array içine ekler
let todos = [
  new Todo('Pay the bills before evening', 'high', '13/12/2023'),
  new Todo('Go shopping after the work', 'med', '21/06/2023'),
  new Todo(
    'Wash the dishes but first remember take the garbage can',
    'low',
    '05/03/2023'
  ),
  new Todo('Pay the bills before evening', 'med', '16/02/2023'),
  new Todo(
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste consequuntur quam atmolestiae doloremque quas',
    'high',
    '31/04/2022'
  ),
];

function getFormData() {
  const todoTitle = document.querySelector('#todoTitle').value;
}
getFormData();

export { todos, Todo };
