import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  currentUserSelector,
  logoutAction,
  updateCurrentUserAction
} from 'src/app/auth/store';
import {
  IBackendErrors,
  ICurrentUser,
  ICurrentUserInput
} from 'src/app/shared/types';
import {
  isSubmittingSelector,
  validationErrorsSelector
} from '../../store/selectors';

@Component({
  selector: 'mc-settings',
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit, OnDestroy {
  currentUser: ICurrentUser;
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<IBackendErrors | null>;

  private currentUserSubscribtion: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private changeDetecorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initValues();
  }

  ngOnDestroy(): void {
    this.currentUserSubscribtion?.unsubscribe();
  }

  onSubmit(): void {
    const currentUserInput: ICurrentUserInput = {
      ...this.currentUser,
      ...this.form.value
    };
    this.store.dispatch(updateCurrentUserAction({ currentUserInput }));
  }

  onLogout(): void {
    this.store.dispatch(logoutAction());
  }

  private initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.currentUserSubscribtion = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((user: ICurrentUser) => {
        this.currentUser = user;
        this.initForm();
        this.changeDetecorRef.detectChanges();
      });
  }

  private initForm(): void {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: ''
    });
  }
}
