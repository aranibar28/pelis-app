import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
})
export class MoviesPosterGridComponent implements OnInit {
  @Input() movies: Movie[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.movies);
  }
}
