import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() delete
  @Input() add
  todos: Todo[]
  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos)
  }

  addTodo(title) {
    this.todoService.addTodo(title).subscribe(() =>  this.todos.push({title, isDone: false}))

  }

  deleteOne(id) {
    this.todoService.deleteTodo(id)
      .subscribe(() =>
      this.todos = this.todos.filter((todo) => todo._id !== id)
      )
  }


}
