import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() delete
  todos: string[]
  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos()
  }

  deleteOne(id) {
    console.log('deletetet', id);
    this.todoService.deleteTodo(id)
    this.todos = this.todos.filter((todo, todoId) => todoId !== id)
  }


}
