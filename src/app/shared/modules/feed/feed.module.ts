import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components';
import { FeedService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers)
  ],
  providers: [FeedService],
  declarations: [FeedComponent],
  exports: [FeedComponent]
})
export class FeedModule { }
