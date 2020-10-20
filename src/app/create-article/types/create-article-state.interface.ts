import { IBackendErrors } from 'src/app/shared/types';

export interface ICreateArticleState {
  isSubmitting: boolean;
  validationErrors: IBackendErrors | null;
}
