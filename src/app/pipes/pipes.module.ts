import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterPipe } from './poster.pipe';
import { TimesPipe } from './times.pipe';

@NgModule({
  declarations: [PosterPipe, TimesPipe],
  exports: [PosterPipe, TimesPipe],
  imports: [CommonModule],
})
export class PipesModule {}
