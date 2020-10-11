import { createAction, props } from '@ngrx/store';
import { IBackendErrors, ICurrentUser } from 'src/app/shared/types';
import { ILoginRequest } from '../../types';
import { ActionTypes } from '../action-types';

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const getCurrentUserFailueAction = createAction(ActionTypes.GET_CURRENT_USER_FAILURE);

