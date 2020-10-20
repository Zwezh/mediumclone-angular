import { Action, createReducer, on } from '@ngrx/store';
import { IEditArticleState } from '../types';
import {
  editArticleAction,
  editArticleFailureAction,
  editArticleSuccessAction,
  getArticleFailureAction,
  getArticleSuccessAction
} from './actions';

const initialState: IEditArticleState = {
  isSubmitting: false,
  isLoading: false,
  article: null,
  validationErrors: null
};

const editArticleReducer = createReducer(
  initialState,
  on(
    editArticleAction,
    (state): IEditArticleState => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    editArticleSuccessAction,
    (state): IEditArticleState => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    editArticleFailureAction,
    (state, action): IEditArticleState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    getArticleFailureAction,
    (state): IEditArticleState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): IEditArticleState => ({
      ...state,
      isLoading: false,
      article: action.article
    })
  ),
  on(
    getArticleFailureAction,
    (state): IEditArticleState => ({
      ...state,
      isLoading: false
    })
  )
);

export default function reducers(state: IEditArticleState, action: Action) {
  return editArticleReducer(state, action);
}
