import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FeedService } from '../../services';
import { IGetFeedResponse } from '../../types';
import { getFeedAction, getFeedSuccessAction, getFeedFailureAction } from '../actions';

@Injectable()
export class GetFeedEffect {

  constructor(
    private actions$: Actions,
    private feedService: FeedService
  ) { }

  getFeed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) =>
        this.feedService.getFeed(url).pipe(
          map((feed: IGetFeedResponse) => getFeedSuccessAction({ feed })),
          catchError(() => of(getFeedFailureAction())))
      ),
    );
  });
}
