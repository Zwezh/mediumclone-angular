import { IArticle } from 'src/app/shared/types';
export interface IArticleState {
  isLoading: boolean;
  error: string | null;
  data: IArticle | null;
}
