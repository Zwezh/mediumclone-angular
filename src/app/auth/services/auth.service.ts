import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICurrentUser, ICurrentUserInput } from 'src/app/shared/types';
import { ILoginRequest, IRegisterRequest } from '../types';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAuthResponse } from '../types/auth-response.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users';
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  login(data: ILoginRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users/login';
    return this.http.post<ILoginRequest>(url, data).pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/user';
    return this.http.get<ILoginRequest>(url).pipe(map(this.getUser));
  }

  updateCurrentUser(userInput: ICurrentUserInput): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/user';
    return this.http.put<ILoginRequest>(url, userInput).pipe(map(this.getUser));
  }

  private getUser(response: IAuthResponse): ICurrentUser {
    return response.user;
  }
}
