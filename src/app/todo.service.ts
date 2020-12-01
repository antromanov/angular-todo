import { Injectable } from '@angular/core';
import { todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todos = []
  constructor() { }

  addTodo(title) {
    this.todos.push(title)
  }

  getTodos() {
    return this.todos = todos
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo, todoId) => todoId !== id)
  }
}
