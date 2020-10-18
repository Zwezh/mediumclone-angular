import { IArticleState } from 'src/app/article/types';
import { IAuthState } from 'src/app/auth/types/auth-state.interface';
import { IFeedState } from '../modules/feed/types';
import { IPopularTagsState } from '../modules/popular-tags/types';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  popularTags: IPopularTagsState;
  article: IArticleState;
}
