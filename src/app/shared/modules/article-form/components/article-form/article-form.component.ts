import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IArticleInput, IBackendErrors } from 'src/app/shared/types';

@Component({
  selector: 'mc-article-form',
  templateUrl: './article-form.component.html'
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues: IArticleInput;
  @Input() isSubmitting: boolean;
  @Input() errors: IBackendErrors | null;

  @Output() articleSubmit: EventEmitter<IArticleInput>;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.articleSubmit = new EventEmitter<IArticleInput>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      title: this.initialValues.title,
      description: this.initialValues.description,
      body: this.initialValues.body,
      tagList: this.initialValues.tagList.join(' ')
    });
  }

  onSubmit(): void {
    const value = {
      title: this.form.get('title').value,
      body: this.form.get('body').value,
      description: this.form.get('description').value,
      tagList: this.form.get('tagList').value.split(' ')
    } as IArticleInput;
    this.articleSubmit.emit(value);
  }
}
