import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { Cast } from 'src/app/interfaces/credits.response';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
})
export class MovieComponent implements OnInit {
  public movie: MovieResponse | undefined | null;
  public cast: Cast[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    combineLatest([
      this.moviesService.getMovieDetails(id),
      this.moviesService.getCasts(id),
    ]).subscribe(([movie, cast]) => {
      if (!movie) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.movie = movie;
      this.cast = cast.filter((actor) => actor.profile_path != null);
    });
  }

  onBack() {
    this.location.back();
  }
}
