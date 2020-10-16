import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsComponent } from './components';
import { PopularTagsService } from './services';
import { StoreModule } from '@ngrx/store';
import { GetPopularTagsEffect, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { LoadingModule } from '../loading/loading.module';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { TagListModule } from '../tag-list/tag-list.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
