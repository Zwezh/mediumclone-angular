import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types';
import { ISettingsState } from '../types';

export const settingsFeatureSelector = createFeatureSelector<
  IAppState,
  ISettingsState
>('settings');

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (authState: ISettingsState) => authState.isSubmitting
);
export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (authState: ISettingsState) => authState.validationErrors
);
