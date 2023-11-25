import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../post';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-post-sample',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './post-sample.component.html',
  styleUrl: './post-sample.component.css'
})
export class PostSampleComponent {
  @Input() post!: Post;
}
