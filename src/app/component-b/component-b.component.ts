import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentAComponent } from '../component-a/component-a.component';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  posts$

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.posts$.subscribe(response => {
      this.posts$ = response;
    })
  }

  findPost(id) {
   return this.posts$.find(post => post.id == id);
  }

}