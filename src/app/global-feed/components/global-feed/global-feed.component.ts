import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit {

  apiUrl: string;

  constructor() {
    this.apiUrl = '/articles';
  }

  ngOnInit() {
  }

}
