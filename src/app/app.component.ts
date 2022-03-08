import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private moviesService: MoviesService) {
    this.moviesService.getCartelera().subscribe((data) => {
      console.log(data.results);
    });
  }
}
