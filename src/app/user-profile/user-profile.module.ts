import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileService } from './services';
import { EffectsModule } from '@ngrx/effects';
import { GetUserProfileEffect, reducers } from './store';
import { StoreModule } from '@ngrx/store';
import {
  ErrorMessageModule,
  FeedModule,
  LoadingModule
} from '../shared/modules';

const routes: Routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', reducers),
    LoadingModule,
    ErrorMessageModule,
    FeedModule
  ],
  declarations: [UserProfileComponent],
  providers: [UserProfileService]
})
export class UserProfileModule {}
