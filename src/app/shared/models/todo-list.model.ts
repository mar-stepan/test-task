export class TodoListModel {
  id: number;
  name: string;
  description: string;
  createAt: Date;
  editedAt: Date;
  checked: boolean;

  constructor(todoList?: TodoListModel) {
    if (todoList) {
      this.id = todoList.id;
      this.name = todoList.name;
      this.description = todoList.description;
      this.createAt = todoList.createAt;
      this.editedAt = todoList.editedAt;
      this.checked = todoList.checked;
    } else {
      this.id = Math.round(Math.random() * 100);
      this.name = '';
      this.description = '';
      this.createAt = new Date();
      this.editedAt = new Date();
      this.checked = false;
    }
  }

}
