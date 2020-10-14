import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
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
    this.initData();
    this.initValues();
  }

  private initData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrl }));
  }

  private initValues(): void {
    this.baseUrl = this.router.url.split('?')[0];
    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params.page || '1');
      }
    );
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
  }
}
