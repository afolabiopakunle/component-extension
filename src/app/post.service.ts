import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from './post';

@Injectable()
export class PostService {

  posts$ = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) {
    this.fetchPosts();
   }

  fetchPosts() {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      this.posts$.next(response);
    });
  }

  postFectcher() {
    return this.posts$.asObservable;
  }


  // findPost(id) {
  //   let post = this.posts$.find(post => post.id == id);
  //   post ? post : this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
  //   .subscribe(response => {
  //     return response;
  //   })

  //   return post;
  // }

}