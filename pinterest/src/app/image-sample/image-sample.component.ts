import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSample } from '../imgsample';
import { publishFacade } from '@angular/compiler';

@Component({
  selector: 'app-image-sample',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './image-sample.component.html',
  styleUrl: './image-sample.component.css'
})
export class ImageSampleComponent {
  @Input() imgSample!: ImgSample;


}

