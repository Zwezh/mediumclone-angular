import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types';
import { IPopularTagsState } from '../types';

export const PopularTagsFeatureSelector = createFeatureSelector<
  IAppState,
  IPopularTagsState
>('popularTags');

export const isLoadingSelector = createSelector(
  PopularTagsFeatureSelector,
  (state: IPopularTagsState) => state.isLoading
);
export const errorSelector = createSelector(
  PopularTagsFeatureSelector,
  (state: IPopularTagsState) => state.error
);
export const popularTagsSelector = createSelector(
  PopularTagsFeatureSelector,
  (state: IPopularTagsState) => state.data
);
