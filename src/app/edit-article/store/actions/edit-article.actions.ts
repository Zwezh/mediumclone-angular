import { createAction, props } from '@ngrx/store';
import { IArticle, IArticleInput, IBackendErrors } from 'src/app/shared/types';
import { ActionTypes } from '../action-types';

export const editArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{ slug: string; articleInput: IArticleInput }>()
);
export const editArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);
export const editArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{ errors: IBackendErrors }>()
);
