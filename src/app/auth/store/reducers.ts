import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { IAuthState } from '../types/auth-state.interface';
import { registerAction } from './actions';

const initialState: IAuthState = {
  isSubmitting: false
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state): IAuthState => ({
    ...state,
    isSubmitting: true
  }))
);

export function reducers(state: IAuthState, action: Action): IAuthState {
  return authReducer(state, action);
}

