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
  item: TodoListModel;
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
    this.item = this.data.new ? new TodoListModel() : this.data.item;
    this.itemForm = this.fb.group({
      id: [this.item.id, {disable: true}],
      name: [this.item.name, Validators.required],
      description: [this.item.description, Validators.required],
      createAt: [this.item.createAt, Validators.required],
      editedAt: [this.item.editedAt, Validators.required]
    });
    this.blockEditing();
  }

  blockEditing(): void {
    this.itemForm.get('id').disable();
    this.itemForm.get('createAt').disable();
    this.itemForm.get('editedAt').disable();
  }

  close(): void {
    this.matDialogRef.close();
  }

  onSubmit(): void {
    const item: TodoListModel = this.itemForm.value;
    item.id = this.item.id;
    item.createAt = this.item.createAt;
    item.editedAt = new Date();
    this.matDialogRef.close({item, new: this.data.new});
  }

}
