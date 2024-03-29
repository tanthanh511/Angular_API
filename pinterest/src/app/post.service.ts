import { Injectable, inject } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  readonly url = 'https://pinterest-clone-4j5x.onrender.com';
  postList: Post[] = [];
  http = inject(HttpClient);

  // ngOnInit(): void {
  //   this.http.get<Post[]>(`${this.url}/posts`).subscribe((data) => {
  //     this.postList = data as Post[];
  //   });
  //   // this.getPostList();
  // }

  // getPostList() {
  //   this.http.get<Post[]>(`${this.url}/posts`).subscribe((data) => {
  //     this.postList = data as Post[];
  //   });
    
  // }

  getAllPost() {
    return this.http.get<Post[]>(`${this.url}/posts`).subscribe((data) => {
      this.postList = data as Post[];
    });
  }

  getAllPostObs(){
    return this.http.get<Post[]>(`${this.url}/posts`)
  }

  getPostById(id: number): Post | undefined {
    return this.postList.find((post) => post.id === id);
  }
  
  constructor() {}
}


