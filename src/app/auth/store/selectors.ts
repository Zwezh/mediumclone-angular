import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types';
import { IAuthState } from '../types/auth-state.interface';

export const authFeatureSelector = createFeatureSelector<IAppState, IAuthState>('auth');

export const isSubmittingSelector = createSelector(authFeatureSelector, (authState: IAuthState) => authState.isSubmitting);
export const validationErrorsSelector = createSelector(authFeatureSelector, (authState: IAuthState) => authState.validationErrors);
