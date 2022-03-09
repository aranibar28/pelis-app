import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {
    this.moviesService.getCartelera().subscribe((data) => {
      this.movies = data.results;
    });
  }

  ngOnInit(): void {}
}
