import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { parseUrl } from 'query-string';
import { stringify } from 'querystring';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  errorSelector,
  feedSelector,
  getFeedAction,
  isLoadingSelector
} from '../../store';
import { IGetFeedResponse } from '../../types';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input() apiUrl: string;

  baseUrl: string;
  limit: number;
  currentPage: number;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<IGetFeedResponse | null>;

  private queryParamsSubscription: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.limit = environment.limit;
  }
  ngOnDestroy(): void {
    this.queryParamsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.initValues();
  }

  private initValues(): void {
    this.baseUrl = this.router.url.split('?')[0];
    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params.page || '1');
        this.loadFeed();
      }
    );
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
  }

  private loadFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrl);
    const stringifyParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    });
    const url = `${parsedUrl.url}?${stringifyParams}`;
    this.store.dispatch(getFeedAction({ url }));
  }
}
