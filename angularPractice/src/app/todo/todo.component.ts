import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 @ Input() itemdata = 20;
	constructor() { }
	list:any[] =[];
	ngOnInit(): void {
	}

	addtask(item: any) {
       this.list.push({id:this.list.length , name:item});
       
	}
	
	remove(id:number){
		this.list = this.list.filter(demo=>demo.id !== id)
	} 
}
