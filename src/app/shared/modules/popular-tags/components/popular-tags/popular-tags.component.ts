import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PopularTag } from 'src/app/shared/types';
import {
  errorSelector,
  getPopularTagsAction,
  isLoadingSelector,
  popularTagsSelector
} from '../../store';
import { IGetPopularTagsResponse } from '../../types';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularTagsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  popularTags$: Observable<PopularTag[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initData();
    this.initValues();
  }

  private initData(): void {
    this.store.dispatch(getPopularTagsAction());
  }

  private initValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
  }
}
