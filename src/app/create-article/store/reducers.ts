import { Action, createReducer, on } from '@ngrx/store';
import { ICreateArticleState } from '../types';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction
} from './actions';

const initialState: ICreateArticleState = {
  isSubmitting: false,
  validationErrors: null
};

const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): ICreateArticleState => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    createArticleSuccessAction,
    (state): ICreateArticleState => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    createArticleFailureAction,
    (state, action): ICreateArticleState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
);

export default function reducers(state: ICreateArticleState, action: Action) {
  return createArticleReducer(state, action);
}
