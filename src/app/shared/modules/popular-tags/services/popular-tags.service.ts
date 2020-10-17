import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PopularTag } from 'src/app/shared/types';
import { environment } from 'src/environments/environment';
import { IGetPopularTagsResponse } from '../types';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTag[]> {
    const fullUrl = environment.apiUrl + '/tags';
    return this.http
      .get<IGetPopularTagsResponse>(fullUrl)
      .pipe(map((data: IGetPopularTagsResponse) => data.tags));
  }
}
