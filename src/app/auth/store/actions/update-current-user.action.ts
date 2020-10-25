import { createAction, props } from '@ngrx/store';
import {
  IBackendErrors,
  ICurrentUser,
  ICurrentUserInput
} from 'src/app/shared/types';
import { ActionTypes } from '../action-types';

export const updateCurrentUserAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER,
  props<{ currentUserInput: ICurrentUserInput }>()
);

export const updateCurrentUserSuccessAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const updateCurrentUserFailueAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_FAILURE,
  props<{ errors: IBackendErrors }>()
);
