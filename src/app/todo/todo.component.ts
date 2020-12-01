import { Component, OnInit, Input, Output } from '@angular/core';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo
  @Input() todoId
  @Output() delete = this.onDelete
  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos()
  }

  onDelete(id) {
    this.todoService.deleteTodo(id)
  }

}
