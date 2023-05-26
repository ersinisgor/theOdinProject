//---Projeleri Construction Function olarak oluşturur
export default class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.todos = [];
  }

  setProjectName(projectName) {
    this.projectName = projectName;
  }

  getProjectName() {
    return this.projectName;
  }

  setTodos(todos) {
    this.todos = todos;
  }

  getTodos() {
    return this.todos;
  }
}
