import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { IArticle } from 'src/app/shared/types';
import { CreateArticleService } from '../../services';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction
} from '../actions';

@Injectable()
export class CreateArticleEffect {
  constructor(
    private router: Router,
    private actions$: Actions,
    private service: CreateArticleService
  ) {}

  createArticleEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ articleInput }) =>
        this.service.createArticle(articleInput).pipe(
          map((article: IArticle) => {
            return createArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              createArticleFailureAction({ errors: errorResponse.error.errors })
            )
          )
        )
      )
    )
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({ article }) => this.router.navigate(['articles', article.slug]))
      ),
    { dispatch: false }
  );
}
