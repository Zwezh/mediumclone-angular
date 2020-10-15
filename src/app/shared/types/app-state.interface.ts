import { IAuthState } from 'src/app/auth/types/auth-state.interface';
import { IFeedState } from '../modules/feed/types';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
}
