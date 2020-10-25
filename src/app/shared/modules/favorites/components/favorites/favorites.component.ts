import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import { addToFavoritesActoin } from '../../store';

@Component({
  selector: 'mc-favorites',
  templateUrl: './favorites.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit {
  @Input() isFavorited: boolean;
  @Input() favoritesCount: number;
  @Input() articleSlug: string;

  count: number;
  isFavorite: boolean;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  onToggleLike(): void {
    this.store.dispatch(
      addToFavoritesActoin({
        isFavorited: this.isFavorite,
        slug: this.articleSlug
      })
    );
    this.count = this.isFavorite ? this.count - 1 : this.count + 1;
    this.isFavorite = !this.isFavorite;
  }

  private initValues(): void {
    this.count = this.favoritesCount;
    this.isFavorite = this.isFavorited;
  }
}
