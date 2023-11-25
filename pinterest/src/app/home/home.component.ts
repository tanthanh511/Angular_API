import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../post';
import { PostSampleComponent } from '../post-sample/post-sample.component';
// import { HttpClient, provideHttpClient } from '@angular/common/http';
// import { bootstrapApplication } from '@angular/platform-browser';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PostSampleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  readonly url = 'https://pinterest-clone-4j5x.onrender.com';
  postList: Post[] = [];
  postService: PostService = inject(PostService);
  constructor() {}

  ngOnInit(): void {
    this.postList = this.postService.getAllPost();
  }
}

// bootstrapApplication(HomeComponent, {
//   providers: [CommonModule, provideHttpClient()],
// });
