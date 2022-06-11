import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 
  todos:Todo[];
  constructor() { 
    this.todos = [
      {
        sno:1,
        title: "title",
        description: "desc",
        active: true

      },
      {
        sno:2,
        title: "title2",
        description: "desc",
        active: true

      },
      {
        sno:3,
        title: "title3",
        description: "desc",
        active: true

      }
    ]
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
//console.warn(todo);
  const index = this.todos.indexOf(todo);
  this.todos.splice(index, 1);
  }
}
