import { IArticle, IBackendErrors } from 'src/app/shared/types';

export interface IEditArticleState {
  isLoading: boolean;
  isSubmitting: boolean;
  article: IArticle | null;
  validationErrors: IBackendErrors | null;
}
