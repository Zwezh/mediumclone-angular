import { createAction, props } from '@ngrx/store';
import { IArticle } from 'src/app/shared/types';
import { ActionTypes } from '../../types';

export const addToFavoritesActoin = createAction(
  ActionTypes.ADD_TO_FAVORITES,
  props<{ isFavorited: boolean; slug: string }>()
);
export const addToFavoritesSuccessActoin = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCES,
  props<{ article: IArticle }>()
);
export const addToFavoritesFailureActoin = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILUE
);
