import { Action, createReducer, on } from '@ngrx/store';
import { IAuthState } from '../types/auth-state.interface';
import {
  getCurrentUserAction,
  getCurrentUserSuccessAction,
  loginAction,
  loginFailueAction,
  loginSuccessAction,
  logoutAction,
  registerAction,
  registerFailueAction,
  registerSuccessAction,
  updateCurrentUserSuccessAction
} from './actions';

const initialState: IAuthState = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    registerSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    registerFailueAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    loginAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    loginSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    loginFailueAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    getCurrentUserAction,
    (state): IAuthState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    getCurrentUserAction,
    (state): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      currentUser: action.currentUser
    })
  ),
  on(
    logoutAction,
    (): IAuthState => ({
      ...initialState,
      isLoggedIn: false
    })
  )
);

export function reducers(state: IAuthState, action: Action): IAuthState {
  return authReducer(state, action);
}
