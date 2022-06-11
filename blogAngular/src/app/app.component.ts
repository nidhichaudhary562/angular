import { Component } from '@angular/core';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogAngular';
  posts:any
  constructor(private postList:PostService){
   // console.warn(postList.posts())
      postList.posts().subscribe((data)=>{
        this.posts = data;
      })

  }
}
