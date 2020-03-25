import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TodoListModel} from '../../../shared/models/todo-list.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-edit-todo-list',
  templateUrl: './new-edit-todo-list.component.html',
  styleUrls: ['./new-edit-todo-list.component.scss']
})
export class NewEditTodoListComponent implements OnInit {

  itemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<NewEditTodoListComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { item: TodoListModel, new: boolean }
  ) {
  }

  ngOnInit(): void {
    this.prepareData();
  }

  prepareData(): void {
    const item = this.data.new ? new TodoListModel() : this.data.item;
    console.log('', item);
    this.itemForm = this.fb.group({
      id: [item.id, {disable: true}],
      name: [item.name, Validators.required],
      description: [item.description, Validators.required],
      createAt: [item.createAt, Validators.required],
      editedAt: [item.editedAt, Validators.required]
    });
  }

  close(): void {
    this.matDialogRef.close();
  }

  onSubmit(): void {
    const item = this.itemForm.value;
    this.matDialogRef.close({item, new: this.data.new});
  }

}
