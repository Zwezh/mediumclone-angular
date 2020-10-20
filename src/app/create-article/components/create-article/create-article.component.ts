import { Component, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticleInput } from 'src/app/shared/types';
import {
  createArticleAction,
  isSubmittingSelector,
  validationErrorsSelector
} from '../../store';

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html'
})
export class CreateArticleComponent implements OnInit {
  initialValues: IArticleInput = {
    title: '',
    body: '',
    description: '',
    tagList: []
  };

  isSubmitting$: Observable<boolean>;
  validationError$: Observable<ValidationErrors | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  onCreateArticle(articleInput: IArticleInput): void {
    this.store.dispatch(createArticleAction({ articleInput }));
  }

  initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.validationError$ = this.store.pipe(select(validationErrorsSelector));
  }
}
