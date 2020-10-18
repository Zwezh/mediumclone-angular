import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { currentUserSelector } from 'src/app/auth/store';
import { IArticle, ICurrentUser } from 'src/app/shared/types';
import { environment } from 'src/environments/environment';
import {
  errorSelector,
  articleSelector,
  getArticleAction,
  isLoadingSelector,
  deleteArticleAction
} from '../../store';

@Component({
  selector: 'mc-article-page',
  templateUrl: './article-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlePageComponent implements OnInit, OnDestroy {
  @Input() apiUrl: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  article$: Observable<IArticle | null>;
  isAuthor$: Observable<boolean>;

  private queryParamsSubscription: Subscription;

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {}
  ngOnDestroy(): void {
    this.queryParamsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.initValues();
    this.loadArticle();
  }

  onDelete(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.store.dispatch(deleteArticleAction({ slug }));
  }

  private initValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.article$ = this.store.pipe(select(articleSelector));
    this.isAuthor$ = zip(
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))
    ).pipe(
      map(
        ([article, currentUser]: [IArticle, ICurrentUser]) =>
          article?.author?.username === currentUser?.username
      )
    );
  }

  private loadArticle(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('slug');
    this.store.dispatch(getArticleAction({ slug }));
  }
}
