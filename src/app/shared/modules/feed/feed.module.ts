import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components';
import { FeedService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading/loading.module';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    ErrorMessageModule,
    LoadingModule
  ],
  providers: [FeedService],
  declarations: [FeedComponent],
  exports: [FeedComponent]
})
export class FeedModule { }
