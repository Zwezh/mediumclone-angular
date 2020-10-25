import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './components';
import { FavoritesService } from './services';
import { EffectsModule } from '@ngrx/effects';
import { AddToFavoritesEffect } from './store';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
  declarations: [FavoritesComponent],
  exports: [FavoritesComponent],
  providers: [FavoritesService]
})
export class FavoritesModule {}
