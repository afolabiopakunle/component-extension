import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

 post: Post;

  @Input() inputName:string;
  
  constructor(private route: ActivatedRoute,
    private postService: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.postService.postFectcher().subscribe(posts => {
       this.post = posts.find(post => post.id === parseInt(params.id));
       console.log(this.post)
      })
    })
  }

  spreader() {
    console.log(this.inputName)
  }
}