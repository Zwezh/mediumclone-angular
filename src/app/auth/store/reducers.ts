import { Action, createReducer, on } from '@ngrx/store';
import { IAuthState } from '../types/auth-state.interface';
import { registerAction, registerFailueAction, registerSuccessAction } from './actions';

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state): IAuthState => ({
    ...state,
    isSubmitting: true,
    validationErrors: null
  })),
  on(registerSuccessAction, (state, action): IAuthState => ({
    ...state,
    isSubmitting: false,
    isLoggedIn: true,
    currentUser: action.currentUser
  })),
  on(registerFailueAction, (state, action): IAuthState => ({
    ...state,
    isSubmitting: false,
    validationErrors: action.errors
  }))
);

export function reducers(state: IAuthState, action: Action): IAuthState {
  return authReducer(state, action);
}

