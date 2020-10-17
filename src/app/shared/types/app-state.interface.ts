import { IAuthState } from 'src/app/auth/types/auth-state.interface';
import { IPopularTagsState } from 'src/app/popular-tags/types';
import { IFeedState } from '../modules/feed/types';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  popularTags: IPopularTagsState;
}
