import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, RegisterComponent } from './components';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect, RegisterEffect } from './store/effects';
import { BackendErrorMessagesModule } from '../shared/modules';
import { PersistanceService } from '../shared/services';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackendErrorMessagesModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    PersistanceService,
    AuthService
  ]
})
export class AuthModule { }
