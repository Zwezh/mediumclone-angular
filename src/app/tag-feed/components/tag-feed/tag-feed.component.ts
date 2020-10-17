import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tag-feed.component.html'
})
export class TagFeedComponent {
  apiUrl: string;
  tagName: string;

  constructor(route: ActivatedRoute) {
    route.params.subscribe((params: Params) => {
      this.tagName = params?.slug;
      this.apiUrl = `/articles?tag=${this.tagName}`;
    });
  }
}
