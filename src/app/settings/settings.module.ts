import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/idnex';
import { RouterModule, Routes } from '@angular/router';
import { reducers } from './store';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers)
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule {}
