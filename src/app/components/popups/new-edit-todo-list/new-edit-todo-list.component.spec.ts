import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditTodoListComponent } from './new-edit-todo-list.component';

describe('NewEditTodoListComponent', () => {
  let component: NewEditTodoListComponent;
  let fixture: ComponentFixture<NewEditTodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEditTodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
