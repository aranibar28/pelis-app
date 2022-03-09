import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public loading: boolean = false;

  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: '5e15a7fba8a3835e2e2a46529aa637ec',
      language: 'es-US',
      page: this.carteleraPage.toString(),
    };
  }

  resetCarterleraPage() {
    this.carteleraPage = 1;
  }

  getCartelera(): Observable<Movie[]> {
    if (this.loading) {
      return of([]);
    }
    this.loading = true;
    return this.http
      .get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.carteleraPage += 1;
          this.loading = false;
        })
      );
  }

  searchMovie(text: string): Observable<Movie[]> {
    const params = { ...this.params, page: 1, query: text };

    return this.http
      .get<CarteleraResponse>(`${this.baseUrl}/search/movie`, {
        params,
      })
      .pipe(map((resp) => resp.results));
  }
}
