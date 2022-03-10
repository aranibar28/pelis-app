import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/video-response';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.css'],
})
export class ModalVideoComponent implements OnInit {
  @Input() video: Result[] = [];
  videoUrl: string = `https://www.youtube.com/embed/`;
  constructor() {}

  ngOnInit(): void {}
}
