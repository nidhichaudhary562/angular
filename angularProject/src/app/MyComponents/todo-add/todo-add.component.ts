import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import{FormGroup, FormControl} from '@angular/forms'
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
@Output() todoAdd:EventEmitter<Todo> = new EventEmitter();
  todoForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    sno:new FormControl('8'),
    active:new FormControl('1')
  });
  constructor() { }

  ngOnInit(): void {
  }
  seedata(data:FormGroup){
console.log(data);  

  }

}
