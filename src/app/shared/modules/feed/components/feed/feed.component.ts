import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { errorSelector, feedSelector, getFeedAction, isLoadingSelector } from '../../store';
import { IGetFeedResponse } from '../../types';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  @Input() apiUrl: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<IGetFeedResponse | null>;

  constructor(private store: Store) { }

  ngOnInit(): void {
this.initData();
this.initValues();
  }

  private initData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrl }));

  }

  private initValues(): void {
    this.isLoading$ =  this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
  }

}
