import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() add: EventEmitter<any> = new EventEmitter()
  value = ''
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onAdd(title: string) {
    this.add.emit(title.trim())
    this.value = ''
  }

  handleInput(e) {
    this.value = e.target.value
  }

}
