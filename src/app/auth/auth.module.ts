import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects';
import { BackendErrorMessagesModule } from '../shared/modules';
import { PersistanceService } from '../shared/services';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule
  ],
  declarations: [RegisterComponent],
  providers: [
    PersistanceService,
    AuthService
  ]
})
export class AuthModule { }
