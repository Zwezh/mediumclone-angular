import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types';
import { IUserProfileState } from '../types';

export const userProfileFeatureSelector = createFeatureSelector<
  IAppState,
  IUserProfileState
>('userProfile');

export const isLoadingSelector = createSelector(
  userProfileFeatureSelector,
  (state: IUserProfileState) => state.isLoading
);
export const userProfileSelector = createSelector(
  userProfileFeatureSelector,
  (state: IUserProfileState) => state.data
);
export const errorsSelector = createSelector(
  userProfileFeatureSelector,
  (state: IUserProfileState) => state.errors
);
