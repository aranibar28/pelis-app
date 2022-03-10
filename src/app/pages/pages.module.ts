import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { BarRatingModule } from 'ngx-bar-rating';

@NgModule({
  declarations: [HomeComponent, MovieComponent, SearchComponent],
  imports: [CommonModule, ComponentsModule, PipesModule, BarRatingModule],
})
export class PagesModule {}
