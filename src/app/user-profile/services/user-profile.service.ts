import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProfile } from 'src/app/shared/types';
import { environment } from 'src/environments/environment';
import { IUserProfileResponse } from '../types';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<IProfile> {
    const url = `${environment.apiUrl}/profiles/${slug}`;
    return this.http
      .get<IUserProfileResponse>(url)
      .pipe(map((response: IUserProfileResponse) => response.profile));
  }
}
