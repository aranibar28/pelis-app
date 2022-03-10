import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent,
    CastSlideshowComponent,
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent,
    CastSlideshowComponent,
  ],
  imports: [CommonModule, RouterModule, BarRatingModule, PipesModule],
})
export class ComponentsModule {}
