import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ArticleService } from 'src/app/shared/services';
import { IArticle } from 'src/app/shared/types';
import { getArticleAction, getArticleSuccessAction, getArticleFailureAction } from '../actions';

@Injectable()
export class GetArticleEffect {

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) { }

  getArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) =>
        this.articleService.getArticle(slug).pipe(
          map((article: IArticle) => getArticleSuccessAction({ data: article })),
          catchError(() => of(getArticleFailureAction())))
      ),
    );
  });
}
