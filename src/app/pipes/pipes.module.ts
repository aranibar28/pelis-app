import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterPipe } from './poster.pipe';
import { TimesPipe } from './times.pipe';
import { DomseguroPipe } from './domseguro.pipe';

@NgModule({
  declarations: [PosterPipe, TimesPipe, DomseguroPipe],
  exports: [PosterPipe, TimesPipe, DomseguroPipe],
  imports: [CommonModule],
})
export class PipesModule {}
