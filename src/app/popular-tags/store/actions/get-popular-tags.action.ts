import { createAction, props } from '@ngrx/store';
import { IGetPopularTagsResponse } from '../../types';
import { ActionTypes } from '../actions-types';

export const getPopularTagsAction = createAction(
  ActionTypes.GET_POPULAR_TAGS);
export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ tags: IGetPopularTagsResponse }>()
);
export const getPopularTagsFailureAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
);
