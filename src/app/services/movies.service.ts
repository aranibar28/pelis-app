import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getCartelera(): Observable<CarteleraResponse> {
    return this.http.get<CarteleraResponse>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=5e15a7fba8a3835e2e2a46529aa637ec&language=es-US&page=1'
    );
  }
}
