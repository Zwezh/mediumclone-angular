import { IProfile } from 'src/app/shared/types';

export interface IUserProfileState {
  data: IProfile | null;
  isLoading: boolean;
  errors: string | null;
}
