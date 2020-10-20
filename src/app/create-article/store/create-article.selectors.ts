import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types';
import { ICreateArticleState } from '../types';

export const createArticleFeatureSelector = createFeatureSelector<
  IAppState,
  ICreateArticleState
>('createArticle');

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (articleState: ICreateArticleState) => articleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (articleState: ICreateArticleState) => articleState.validationErrors
);
