import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IGetArticleResponse } from 'src/app/article/types';
import { IArticle, IArticleInput } from 'src/app/shared/types';
import { environment } from 'src/environments/environment';

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(slug:string, articleInput: IArticleInput): Observable<IArticle> {
    const url = `${environment.apiUrl}/articles/${slug}`;
    return this.http
      .put<IGetArticleResponse>(url, articleInput)
      .pipe(map((response: IGetArticleResponse) => response.article));
  }
}
