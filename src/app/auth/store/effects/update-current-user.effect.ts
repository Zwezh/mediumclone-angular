import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PersistanceService } from 'src/app/shared/services';
import { ICurrentUser } from 'src/app/shared/types';
import { AuthService } from '../../services';
import {
  updateCurrentUserAction,
  updateCurrentUserFailueAction,
  updateCurrentUserSuccessAction
} from '../actions';

@Injectable()
export class UpdateUserEffect {
  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({ currentUserInput }) =>
        this.authService.updateCurrentUser(currentUserInput).pipe(
          map((currentUser: ICurrentUser) => {
            this.persistanceService.set(`accessToken`, currentUser.token);
            return updateCurrentUserSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              updateCurrentUserFailueAction({
                errors: errorResponse.error.errors
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}
}
