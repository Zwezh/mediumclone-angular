import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { EditArticleService } from './services';
import { EffectsModule } from '@ngrx/effects';
import { EditArticleEffect, GetArticleEffect } from './store/effects';
import { StoreModule } from '@ngrx/store';
import reducers from './store/reducers';
import { EditArticleComponent } from './components';
import { ArticleService } from '../shared/services';
import { LoadingModule } from '../shared/modules';

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    LoadingModule,
    EffectsModule.forFeature([EditArticleEffect, GetArticleEffect]),
  StoreModule.forFeature('editArticle', reducers)
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, ArticleService]
})
export class EditArticleModule {}
