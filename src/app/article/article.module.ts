import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { DeleteArticleEffect, GetArticleEffect } from './store';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { RouterModule, Routes } from '@angular/router';
import { ArticleContentComponent, ArticlePageComponent } from './components';
import {
  ErrorMessageModule,
  LoadingModule,
  TagListModule
} from '../shared/modules';
import { ArticleService as SharedArticleService } from '../shared/services';
import { ArticleService } from './services';

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticlePageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    ErrorMessageModule,
    LoadingModule,
    TagListModule
  ],
  providers: [SharedArticleService, ArticleService],
  declarations: [ArticlePageComponent, ArticleContentComponent]
})
export class ArticleModule {}
