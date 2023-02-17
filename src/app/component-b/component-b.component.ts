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

  posts$: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts$ = this.postService.postFectcher()
  }

  replace() {
    this.postService.replace()
  }
}