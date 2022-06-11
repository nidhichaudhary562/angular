import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
post:any;
id:number =1;
  constructor(
    public postService: PostService,
    private route:ActivatedRoute) {
    
     
     }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.postService.find(this.id).subscribe((data)=>{
      this.post = data;
    })
  }
  


}
