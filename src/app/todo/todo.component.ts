import { Component, OnInit } from '@angular/core';
import { comptodo } from '../comptodo';
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: comptodo[];
  filter = 'all';
  todoTitle: string = '';
  todoId: number = 4;
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'wash the car',
        editable: false,
        completed: false
      },
      {
        id: 2,
        title: 'read book',
        editable: false,
        completed: false
      },
      {
        id: 3,
        title: 'eat lunch',
        editable: false,
        completed: false
      }
    ]

  }

  addTodo() {

    this.todos.push({
      id: this.todoId,
      title: this.todoTitle,
      editable: false,
      completed: false
    });
    this.todoId++;
    this.todoTitle = '';
  }
  deleteTodo(id: number) {

    this.todos = this.todos.filter(comptodo => comptodo.id != id);
  }
  editTodo(comptodo: comptodo) {
    comptodo.editable = true;
  }

  doneEdit(comptodo: comptodo) {
    comptodo.editable = false;
  }
  remainingTodo(): number {
    return this.todos.filter(comptodo => !comptodo.completed).length;
  }
  checkAll() {
    this.todos.forEach(comptodo => comptodo.completed = (<HTMLInputElement>event.target).checked);
  }
  showAll() {

    this.todos = this.todos;

  }
  showCompleted() {

    this.todos = this.todos.filter(comptodo => comptodo.completed);
  }
  showActive() {

    this.todos = this.todos.filter(comptodo => !comptodo.completed);

  }
  clearAll() {
    this.todos = null;
  }
  show():comptodo[] {
    if (this.filter == 'all')
      return this.todos;
    else if (this.filter =='active') {
      return this.todos.filter(comptodo => !comptodo.completed);
    }
    else if (this.filter == 'completed') {
      return this.todos.filter(comptodo => comptodo.completed);
    }
    return this.todos;
  }
}
