// import { routerNavigationAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import { IPopularTagsState } from '../types';
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from './actions';

const initialState: IPopularTagsState = {
  isLoading: false,
  error: null,
  data: null
};

const feedReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): IPopularTagsState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): IPopularTagsState => ({
      ...state,
      isLoading: false,
      data: action.tags
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state): IPopularTagsState => ({
      ...state,
      isLoading: false,
      data: null
    })
  )
  // on(routerNavigationAction, (): IPopularTagsState => initialState)
);

export function reducers(state, action: Action): IPopularTagsState {
  return feedReducer(state, action);
}
