import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  postService = inject(PostService);
  post: Post | undefined;

  constructor() {}

  ngOnInit(): void {
    const housingLocation = this.postService.getPostById(
      this.route.snapshot.params['id']
    );
    this.post = housingLocation;
  }
}
