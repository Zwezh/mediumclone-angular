import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './components';
import { PopularTagsService } from './services';
import { StoreModule } from '@ngrx/store';
import { GetPopularTagsEffect, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import {
  LoadingModule,
  ErrorMessageModule,
  TagListModule
} from '../shared/modules';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetPopularTagsEffect]),
    StoreModule.forFeature('popularTags', reducers),
    LoadingModule,
    ErrorMessageModule,
    TagListModule
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService]
})
export class PopularTagsModule {}
