import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription, zip } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { currentUserSelector } from 'src/app/auth/store';
import { ICurrentUser, IProfile } from 'src/app/shared/types';
import {
  errorsSelector,
  getUserProfileAction,
  isLoadingSelector,
  userProfileSelector
} from '../../store';

@Component({
  selector: 'mc-user-profile',
  templateUrl: './user-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile: IProfile;
  isLoading$: Observable<boolean>;
  errors$: Observable<string | null>;
  isCurrentUserProfile$: Observable<boolean>;

  get apiUrl(): string {
    const isFavorites = this.router.url.includes('favorites');
    return isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`;
  }
  private slug: string;
  private subscription: Subscription;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.slug = this.route.snapshot.paramMap.get('slug');
  }

  ngOnInit(): void {
    this.loadData();
    this.initValues();
    this.initListeners();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  initValues(): void {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.errors$ = this.store.select(errorsSelector);
    this.isCurrentUserProfile$ = zip(
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean))
    ).pipe(
      map(
        ([currentUser, userProfile]: [ICurrentUser, IProfile]) =>
          currentUser.username === userProfile.username
      )
    );
  }

  initListeners(): void {
    this.subscription = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile: IProfile) => (this.userProfile = userProfile));
    this.route.params.subscribe((params: Params) => {
      this.slug = params?.slug;
      this.loadData();
    });
  }

  loadData(): void {
    this.store.dispatch(getUserProfileAction({ slug: this.slug }));
  }
}
