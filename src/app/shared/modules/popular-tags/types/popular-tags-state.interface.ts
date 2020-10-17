import { PopularTag } from 'src/app/shared/types';
import { IGetPopularTagsResponse } from './get-popular-tags-response';

export interface IPopularTagsState {
  isLoading: boolean;
  error: string | null;
  tags: PopularTag[] | null;
}
