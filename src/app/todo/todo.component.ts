import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo
  @Input() todoId
  @Output() delete: EventEmitter<any> = new EventEmitter()
  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

  onSwitchStatus(todo) {
    this.todo.isDone = !this.todo.isDone
  }

  onDelete(id) {
    this.delete.emit(id)
  }

}
