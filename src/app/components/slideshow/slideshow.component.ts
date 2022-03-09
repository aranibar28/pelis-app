import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styles: [
    `
      .swiper {
        height: 330px;
        width: 100%;
      }

      .movie-description {
        background-color: rgba(0, 0, 0, 0.3);
        bottom: 0;
        padding: 5px 30px;
        position: absolute;
        width: 100%;
      }
      .swiper-button-prev,
      .swiper-button-next {
        color: white;
      }
    `,
  ],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[] = [];
  public mySwiper: Swiper | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      loop: true,
    });
  }

  ngOnInit(): void {}

  onSlidePrev() {
    this.mySwiper?.slidePrev();
  }
  onSlideNext() {
    this.mySwiper?.slideNext();
  }
}
