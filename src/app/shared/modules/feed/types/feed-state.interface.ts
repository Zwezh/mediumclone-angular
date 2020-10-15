import { IGetFeedResponse } from './get-feed-response';

export interface IFeedState {
  isLoading: boolean;
  error: string | null;
  data: IGetFeedResponse | null;
}
