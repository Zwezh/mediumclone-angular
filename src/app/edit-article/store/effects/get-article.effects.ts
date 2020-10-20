import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ArticleService } from 'src/app/shared/services';
import { IArticle } from 'src/app/shared/types';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction
} from '../actions';

@Injectable()
export class GetArticleEffect {
  constructor(
    private router: Router,
    private actions$: Actions,
    private service: ArticleService
  ) {}

  editArticleEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) =>
        this.service.getArticle(slug).pipe(
          map((article: IArticle) => {
            return getArticleSuccessAction({ article });
          }),
          catchError(() => of(getArticleFailureAction()))
        )
      )
    )
  );
}
