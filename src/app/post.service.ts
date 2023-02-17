import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from './post';

@Injectable()
export class PostService {

 private posts$ = new BehaviorSubject<Post[]>([]);
  
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
    return this.posts$.asObservable();
  }

  replace() {
    this.posts$.next([
      {id: 3, userId: 4, title: 'Afolabi', body: 'Opakunle the dev'},
      {id: 6, userId: 4, title: 'Ezra', body: 'Obiwale the dev'},
    ])
  }

}