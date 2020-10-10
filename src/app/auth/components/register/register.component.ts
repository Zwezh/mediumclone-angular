import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBackendErrors } from 'src/app/shared/types';
import { AuthService } from '../../services';
import { isSubmittingSelector, registerAction, validationErrorsSelector } from '../../store';
import { IRegisterRequest } from '../../types';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<IBackendErrors | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService) {

  }
  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues()
  }

  onSubmit(): void {
    const request: IRegisterRequest = {
      user: this.form.value
    };
    this.store.dispatch(registerAction({ request }));
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: ''
    });
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
}
