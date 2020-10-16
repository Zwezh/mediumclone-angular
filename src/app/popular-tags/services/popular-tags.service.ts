import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGetPopularTagsResponse } from '../types';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<IGetPopularTagsResponse> {
    const fullUrl = environment.apiUrl + '/tags';
    return this.http.get<IGetPopularTagsResponse>(fullUrl);
  }
}
