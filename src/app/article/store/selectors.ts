import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types';
import { IArticleState } from '../types';

export const articleFeatureSelector = createFeatureSelector<
  IAppState,
  IArticleState
>('article');

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState) => articleState.isLoading
);
export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState) => articleState.error
);
export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: IArticleState) => articleState.data
);
