import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IProfile } from 'src/app/shared/types';
import { UserProfileService } from '../../services';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction
} from '../actions';

@Injectable()
export class GetUserProfileEffect {
  constructor(private actions$: Actions, private service: UserProfileService) {}

  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({ slug }) =>
        this.service.getUserProfile(slug).pipe(
          map((userProfile: IProfile) =>
            getUserProfileSuccessAction({ userProfile })
          ),
          catchError(() => of(getUserProfileFailureAction()))
        )
      )
    )
  );
}
