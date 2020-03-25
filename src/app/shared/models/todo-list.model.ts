export class TodoListModel {
  id: number;
  name: string;
  description: string;
  createAt: Date;
  editedAt: Date;

  constructor(todoList?: TodoListModel) {
    if (todoList) {
      this.id = todoList.id;
      this.name = todoList.name;
      this.description = todoList.description;
      this.createAt = todoList.createAt;
      this.editedAt = todoList.editedAt;
    } else {
      this.id = Math.round(Math.random() * 100);
      this.name = '';
      this.description = '';
      this.createAt = new Date();
      this.editedAt = new Date();
    }
  }

}
