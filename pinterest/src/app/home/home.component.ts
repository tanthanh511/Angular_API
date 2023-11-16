import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  http = inject(HttpClient);
  constructor() {
    this.http
      .get(`${this.url}/posts`)
      .subscribe((data) => (this.posts = data as any));
  }
  url = 'https://pinterest-clone-4j5x.onrender.com';

  posts: any[] = [];
  details: any;
  toDetails(post: any) {
    this.details = post;
  }
}

bootstrapApplication(HomeComponent, {
  providers: [CommonModule, provideHttpClient()],
});
