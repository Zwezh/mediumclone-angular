import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IGetArticleResponse } from 'src/app/article/types';
import { IArticle } from 'src/app/shared/types';
import { environment } from 'src/environments/environment';

@Injectable()
export class FavoritesService {
  constructor(private http: HttpClient) {}

  addToFavorites(slug: string): Observable<IArticle> {
    return this.http.post(this.getUrl(slug), {}).pipe(map(this.getArticle));
  }

  removeFromFavorites(slug: string): Observable<IArticle> {
    return this.http.delete(this.getUrl(slug)).pipe(map(this.getArticle));
  }

  private getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }

  private getArticle(response: IGetArticleResponse): IArticle {
    return response.article;
  }
}
