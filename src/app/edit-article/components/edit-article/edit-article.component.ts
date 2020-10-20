import { Component, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IArticle, IArticleInput } from 'src/app/shared/types';
import {
  editArticleAction,
  getArticleAction,
  getArticleSelector,
  isLoadingSelector,
  isSubmittingSelector,
  validationErrorsSelector
} from '../../store';

@Component({
  selector: 'mc-edit-article',
  templateUrl: './edit-article.component.html'
})
export class EditArticleComponent implements OnInit {
  slug: string;

  initialValues$: Observable<IArticleInput>;
  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  validationError$: Observable<ValidationErrors | null>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initValues();
    this.loadData();
  }

  onEditArticle(articleInput: IArticleInput): void {
    this.store.dispatch(editArticleAction({ slug: this.slug, articleInput }));
  }

  loadData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  initValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.validationError$ = this.store.pipe(select(validationErrorsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.initialValues$ = this.store.pipe(
      select(getArticleSelector),
      filter(Boolean),
      map(
        (article: IArticle) =>
          ({
            title: article.title,
            body: article.body,
            description: article.description,
            tagList: article.tagList
          } as IArticleInput)
      )
    );
  }
}
