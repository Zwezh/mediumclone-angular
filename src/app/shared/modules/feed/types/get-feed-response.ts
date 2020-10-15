import { IArticle } from 'src/app/shared/types';

export interface IGetFeedResponse {
  articles: IArticle[];
  articleCount: number;
}
