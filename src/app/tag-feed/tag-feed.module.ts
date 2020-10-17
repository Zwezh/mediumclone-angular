import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  BannerModule,
  FeedModule,
  FeedTogglerModule,
  PopularTagsModule
} from '../shared/modules';
import { TagFeedComponent } from './components';

const routes: Routes = [
  {
    path: 'tag/:slug',
    component: TagFeedComponent
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
  declarations: [TagFeedComponent]
})
export class TagFeedModule {}
