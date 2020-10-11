import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { PersistanceService } from 'src/app/shared/services';
import { ICurrentUser } from 'src/app/shared/types';
import { AuthService } from '../../services';
import { getCurrentUserAction, getCurrentUserFailueAction, getCurrentUserSuccessAction } from '../actions';

@Injectable()
export class GetCurrentUserEffect {

  getCurrentUser$ = createEffect(() => this.actions$
    .pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken');
        if (!token) {
          return of(getCurrentUserFailueAction());
        }
        return this.authService.getCurrentUser()
          .pipe(
            map((currentUser: ICurrentUser) => {
              return getCurrentUserSuccessAction({ currentUser });
            }),
            catchError(() => of(getCurrentUserFailueAction()))
          )
      }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService) { }
}