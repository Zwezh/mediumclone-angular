import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, pipe } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { PersistanceService } from 'src/app/shared/services';
import { ICurrentUser } from 'src/app/shared/types';
import { AuthService } from '../../services';
import { registerAction, registerFailueAction, registerSuccessAction } from '../actions';

@Injectable()
export class RegisterEffect {

  register$ = createEffect(() => this.actions$
    .pipe(
      ofType(registerAction),
      switchMap(({ request }) => this.authService.register(request)
        .pipe(
          map((currentUser: ICurrentUser) => {
            this.persistanceService.set(`accessToken`, currentUser.token);
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => of(registerFailueAction({ errors: errorResponse.error.errors })))
        )
      )
    )
  );

  redirectAfterSubmit$ = createEffect(() => this.actions$
    .pipe(
      ofType(registerSuccessAction),
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