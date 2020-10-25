import { Action, createReducer, on } from '@ngrx/store';
import {
  updateCurrentUserAction,
  updateCurrentUserFailueAction,
  updateCurrentUserSuccessAction
} from 'src/app/auth/store';
import { ISettingsState } from '../types';

const initialState: ISettingsState = {
  isSubmitting: false,
  validationErrors: null
};

const settingsReducer = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): ISettingsState => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state): ISettingsState => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    updateCurrentUserFailueAction,
    (state, action): ISettingsState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
);

export function reducers(
  state: ISettingsState,
  action: Action
): ISettingsState {
  return settingsReducer(state, action);
}
