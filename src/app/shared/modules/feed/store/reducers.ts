import { routerNavigationAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import { IFeedState } from '../types';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction
} from './actions';

const initialState: IFeedState = {
  isLoading: false,
  error: null,
  data: null
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): IFeedState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
      data: action.feed
    })
  ),
  on(
    getFeedFailureAction,
    (state): IFeedState => ({
      ...state,
      isLoading: false,
      data: null
    })
  ),
  on(routerNavigationAction, (): IFeedState => initialState)
);

export function reducers(state, action: Action): IFeedState {
  return feedReducer(state, action);
}
