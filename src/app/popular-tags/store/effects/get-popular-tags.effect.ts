import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PopularTagsService } from '../../services';
import { IGetPopularTagsResponse } from '../../types';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from '../actions';

@Injectable()
export class GetPopularTagsEffect {
  getPopularTagsEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() =>
        this.service.getPopularTags().pipe(
          map((tags: IGetPopularTagsResponse) =>
            getPopularTagsSuccessAction({ tags })
          ),
          catchError(() => of(getPopularTagsFailureAction()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: PopularTagsService) {}
}
