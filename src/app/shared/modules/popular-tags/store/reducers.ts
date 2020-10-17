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
  tags: null
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
      tags: action.tags
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state): IPopularTagsState => ({
      ...state,
      isLoading: false,
      tags: null
    })
  )
  // on(routerNavigationAction, (): IPopularTagsState => initialState)
);

export function reducers(state, action: Action): IPopularTagsState {
  return feedReducer(state, action);
}
