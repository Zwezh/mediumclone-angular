import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components';
import { RouterModule, Routes } from '@angular/router';
import { BannerModule, FeedModule } from '../shared/modules';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule
    ],
  declarations: [GlobalFeedComponent]
})
export class GlobalFeedModule { }
