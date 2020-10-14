import { Component, Input, OnInit } from '@angular/core';
import { Utils } from 'src/app/shared/utils';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() total: number;
  @Input() limit: number;
  @Input() url: string;
  @Input() currentPage: number;

  pagesCount: number;
  pages: number[];

  constructor() {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit);
    this.pages = Utils.range(1, this.pagesCount);
  }
}
