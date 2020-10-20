import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types';
import { IEditArticleState } from '../types';

export const editArticleFeatureSelector = createFeatureSelector<
  IAppState,
  IEditArticleState
>('editArticle');

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (articleState: IEditArticleState) => articleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (articleState: IEditArticleState) => articleState.validationErrors
);

export const getArticleSelector = createSelector(
  editArticleFeatureSelector,
  (articleState: IEditArticleState) => articleState.article
);

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (articleState: IEditArticleState) => articleState.isLoading
);
