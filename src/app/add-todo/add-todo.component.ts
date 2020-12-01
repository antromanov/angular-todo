import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  value = ''
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    console.log('sadccc', this.value);

  }

  onAdd(title: string) {
    this.todoService.addTodo(title.trim())
    this.value = ''
  }

  handleInput(e) {
    this.value = e.target.value
  }

}
