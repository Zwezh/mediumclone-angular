import { createAction, props } from '@ngrx/store';
import { IGetFeedResponse } from '../../types';
import { ActionTypes } from '../action-types';

export const getFeedAction = createAction(ActionTypes.GET_FEED, props<{ url: string }>());
export const getFeedSuccessAction = createAction(ActionTypes.GET_FEED_SUCCESS, props<{ feed: IGetFeedResponse }>());
export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE);
