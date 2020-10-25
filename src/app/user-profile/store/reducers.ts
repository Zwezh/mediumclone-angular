import { Action, createReducer, on } from '@ngrx/store';
import { IUserProfileState } from '../types';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction
} from './actions';

const initalState: IUserProfileState = {
  isLoading: false,
  data: null,
  errors: null
};

const reducer = createReducer(
  initalState,
  on(
    getUserProfileAction,
    (state): IUserProfileState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): IUserProfileState => ({
      ...state,
      isLoading: false,
      data: action.userProfile
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): IUserProfileState => ({
      ...state,
      isLoading: false
    })
  )
);

export function reducers(
  state: IUserProfileState,
  action: Action
): IUserProfileState {
  return reducer(state, action);
}
