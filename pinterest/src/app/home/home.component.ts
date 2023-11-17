import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSample } from '../imgsample';
import { ImageSampleComponent } from '../image-sample/image-sample.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ImageSampleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // http = inject(HttpClient);
  // constructor() {
  //   this.http
  //     .get(`${this.url}/posts`)
  //     .subscribe((data) => (this.posts = data as any));
  // }
  readonly url = 'https://random.imagecdn.app/500/150';

  imgSampleList : ImgSample[] = [
    {
      id:0,
      img:`${this.url}`,
      name: 'Central Creative Facilitator',
      description: 'Quia quisquam minus id.'
    },
    {
      id:2,
      img:`${this.url}`,
      name: 'Central Creative Facilitator',
      description: 'Quia quisquam minus id.'
    },
    {
      id:3,
      img:`${this.url}`,
      name: 'Central Creative Facilitator',
      description: 'Quia quisquam minus id.'
    },
    {
      id:4,
      img:`${this.url}`,
      name: 'Central Creative Facilitator',
      description: 'Quia quisquam minus id.'
    },
    {
      id:5,
      img:`${this.url}`,
      name: 'Central Creative Facilitator',
      description: 'Quia quisquam minus id.'
    },
  ];
}

// bootstrapApplication(HomeComponent, {
//   providers: [CommonModule, provideHttpClient()],
// });
