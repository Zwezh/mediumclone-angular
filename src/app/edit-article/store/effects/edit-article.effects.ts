import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { IArticle } from 'src/app/shared/types';
import { EditArticleService } from '../../services';
import {
  editArticleAction,
  editArticleFailureAction,
  editArticleSuccessAction
} from '../actions';

@Injectable()
export class EditArticleEffect {
  constructor(
    private router: Router,
    private actions$: Actions,
    private service: EditArticleService
  ) {}

  editArticleEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editArticleAction),
      switchMap(({ slug, articleInput }) =>
        this.service.updateArticle(slug, articleInput).pipe(
          map((article: IArticle) => {
            return editArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(editArticleFailureAction({ errors: errorResponse.error.errors }))
          )
        )
      )
    )
  );

  redirectAfterEdit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editArticleSuccessAction),
        tap(({ article }) => this.router.navigate(['articles', article.slug]))
      ),
    { dispatch: false }
  );
}
