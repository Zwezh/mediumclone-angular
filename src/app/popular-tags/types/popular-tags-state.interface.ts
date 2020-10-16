import { IGetPopularTagsResponse } from './get-popular-tags-response';

export interface IPopularTagsState {
  isLoading: boolean;
  error: string | null;
  data: IGetPopularTagsResponse | null;
}
