import { createAction, props } from '@ngrx/store';
import { IBackendErrors, ICurrentUser } from 'src/app/shared/types';
import { IRegisterRequest } from '../../types';
import { ActionTypes } from '../action-types';

export const registerAction = createAction(ActionTypes.REGISTER, props<{ request: IRegisterRequest }>());
export const registerSuccessAction = createAction(ActionTypes.REGISTER_SUCCESS, props<{ currentUser: ICurrentUser }>());
export const registerFailueAction = createAction(ActionTypes.REGISTER_FAILURE, props<{ errors: IBackendErrors }>());
