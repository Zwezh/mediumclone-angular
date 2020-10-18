import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { IArticle } from 'src/app/shared/types';

@Component({
  selector: 'mc-article-content',
  templateUrl: './article-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleContentComponent {
  @Input() article: IArticle;
  @Input() isAuthor: boolean;
  @Output() delete: EventEmitter<void>;
  constructor() {
    this.delete = new EventEmitter<void>();
  }

  onDelete(): void {
    this.delete.emit();
  }
}
