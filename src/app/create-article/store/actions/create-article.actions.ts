import { createAction, props } from '@ngrx/store';
import { IArticle, IArticleInput, IBackendErrors } from 'src/app/shared/types';
import { ActionTypes } from '../action-types';

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: IArticleInput }>()
);
export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);
export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: IBackendErrors }>()
);
