import { createAction, props } from '@ngrx/store';
import { IArticle } from 'src/app/shared/types';
import { ActionTypes } from '../action-types';

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);
export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);
export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
);
