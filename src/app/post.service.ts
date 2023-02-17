import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable()
export class PostService {

  posts: Post[] = []
  constructor(private http: HttpClient) { }

  fetchPosts() {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      this.posts = response;
    });
  }


  findPost(id) {
    let post = this.posts.find(post => post.id == id);
    post ? post : this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .subscribe(response => {
      return response;
    })

    return post;
  }

}