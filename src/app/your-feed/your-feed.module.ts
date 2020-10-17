import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  BannerModule,
  FeedModule,
  FeedTogglerModule,
  PopularTagsModule
} from '../shared/modules';
import { YourFeedComponent } from './components';

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule
  ],
  declarations: [YourFeedComponent]
})
export class YourFeedModule {}
