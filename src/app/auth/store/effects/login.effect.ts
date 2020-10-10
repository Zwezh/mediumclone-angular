import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { PersistanceService } from 'src/app/shared/services';
import { ICurrentUser } from 'src/app/shared/types';
import { AuthService } from '../../services';
import { loginAction, loginFailueAction, loginSuccessAction } from '../actions';

@Injectable()
export class LoginEffect {

  login$ = createEffect(() => this.actions$
    .pipe(
      ofType(loginAction),
      switchMap(({ request }) => this.authService.login(request)
        .pipe(
          map((currentUser: ICurrentUser) => {
            this.persistanceService.set(`accessToken`, currentUser.token);
            return loginSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => of(loginFailueAction({ errors: errorResponse.error.errors })))
        )
      )
    )
  );

  redirectAfterSubmit$ = createEffect(() => this.actions$
    .pipe(
      ofType(loginSuccessAction),
      tap(() => {
        this.router.navigateByUrl('/');
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router) { }
}