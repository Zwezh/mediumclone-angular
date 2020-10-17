import { Component, Input, OnInit } from '@angular/core';
import { PopularTag } from 'src/app/shared/types';

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
  @Input() tags: PopularTag[];

  constructor() {}

  ngOnInit() {}
}
