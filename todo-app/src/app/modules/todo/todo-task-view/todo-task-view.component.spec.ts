import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskViewComponent } from './todo-task-view.component';

describe('TodoTaskViewComponent', () => {
  let component: TodoTaskViewComponent;
  let fixture: ComponentFixture<TodoTaskViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTaskViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTaskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
