import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IGetArticleResponse } from '../../article/types';
import { IArticle } from '../types';

@Injectable()
export class ArticleService {
  private fullUrl = environment.apiUrl + '/articles';

  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<IArticle> {
    return this.http
      .get<IGetArticleResponse>(`${this.fullUrl}/${slug}`)
      .pipe(map((response: IGetArticleResponse) => response.article));
  }
}
