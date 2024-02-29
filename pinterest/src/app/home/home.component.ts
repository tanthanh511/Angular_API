import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../post';
import { PostSampleComponent } from '../post-sample/post-sample.component';
import { PostService } from '../post.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [CommonModule, PostSampleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  // readonly url = 'https://pinterest-clone-4j5x.onrender.com';
  get postList (){
    return this.postService.postList;
  };
  postService: PostService = inject(PostService);
  posts$ = this.postService.getAllPostObs();
  constructor() {}

  ngOnInit(): void {
    this.postService.getAllPost();
  }
}

