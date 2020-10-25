import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { IArticle } from 'src/app/shared/types';
import { FavoritesService } from '../../services';
import {
  addToFavoritesActoin,
  addToFavoritesFailureActoin,
  addToFavoritesSuccessActoin
} from '../actions';

@Injectable()
export class AddToFavoritesEffect {
  constructor(private actions$: Actions, private service: FavoritesService) {}

  addToFavoriteEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesActoin),
      switchMap(({ isFavorited, slug }) =>
        isFavorited
          ? this.service.removeFromFavorites(slug)
          : this.service.addToFavorites(slug)
      ),
      map((article: IArticle) => addToFavoritesSuccessActoin({ article })),
      catchError(() => of(addToFavoritesFailureActoin()))
    )
  );
}
