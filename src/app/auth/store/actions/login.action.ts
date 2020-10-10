import { createAction, props } from '@ngrx/store';
import { IBackendErrors, ICurrentUser } from 'src/app/shared/types';
import { ILoginRequest } from '../../types';
import { ActionTypes } from '../action-types';

export const loginAction = createAction(ActionTypes.LOGIN, props<{ request: ILoginRequest }>());
export const loginSuccessAction = createAction(ActionTypes.LOGIN_SUCCESS, props<{ currentUser: ICurrentUser }>());
export const loginFailueAction = createAction(ActionTypes.LOGIN_FAILURE, props<{ errors: IBackendErrors }>());
