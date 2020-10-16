import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TagListComponent } from './components';

@NgModule({
  imports: [CommonModule],
  exports: [TagListComponent],
  declarations: [TagListComponent]
})
export class TagListModule {}
