import { IBackendErrors } from 'src/app/shared/types';

export interface ISettingsState {
  isSubmitting: boolean;
  validationErrors: IBackendErrors | null;
}
