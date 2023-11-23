import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSample } from '../imgsample';
import { ImageSampleComponent } from '../image-sample/image-sample.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ImageSampleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  //url: string = ""
  imgSampleList: ImgSample[] = [];
 // details: ImgSample[];
  http = inject(HttpClient);
  constructor() {
    // this.url = 'https://pinterest-clone-4j5x.onrender.com/posts';
    // ~(async() => {
    //   const res = await fetch(this.url)
    //   const resData = await res.json();
    //   this.imgSampleList = resData
    //   console.log(this.imgSampleList);
  }

  ngOnInit(): void{
    this.getPostList();
  }

  public getPostList(): void {
    this.http.get<ImgSample[]>(`${this.url}/posts`).subscribe((data) => {
      this.imgSampleList = data as ImgSample[];
    });
  }

  public ShowDetail(): void{
   
  }
  // })()
  readonly url = 'https://pinterest-clone-4j5x.onrender.com';
}

bootstrapApplication(HomeComponent, {
  providers: [CommonModule, provideHttpClient()],
});
