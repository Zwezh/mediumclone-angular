import { IArticleState } from 'src/app/article/types';
import { IAuthState } from 'src/app/auth/types/auth-state.interface';
import { ICreateArticleState } from 'src/app/create-article/types';
import { IEditArticleState } from 'src/app/edit-article/types';
import { IFeedState } from '../modules/feed/types';
import { IPopularTagsState } from '../modules/popular-tags/types';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  popularTags: IPopularTagsState;
  article: IArticleState;
  createArticle: ICreateArticleState;
  editArticle: IEditArticleState;
}
