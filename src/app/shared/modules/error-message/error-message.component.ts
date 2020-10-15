import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-error-message',
  template: `<div>{{message}}</div>`
})
export class ErrorMessageComponent {
  @Input() message: string;

  constructor() {
    this.message = 'Something went wrong';
  }
}
