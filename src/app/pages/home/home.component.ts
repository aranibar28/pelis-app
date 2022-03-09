import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public moviesSlideShow: Movie[] = [];
  public movies: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll = () => {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (pos > max) {
      if (this.moviesService.loading) {
        return;
      }
      this.moviesService.getCartelera().subscribe((movies) => {
        this.movies.push(...movies);
      });
    }
  };

  constructor(private moviesService: MoviesService) {
    this.moviesService.getCartelera().subscribe((movies) => {
      this.moviesSlideShow = movies;
      this.movies = movies;
    });
  }

  ngOnInit(): void {}
}
