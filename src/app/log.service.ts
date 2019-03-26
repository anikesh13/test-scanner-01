import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { logIn, regIn } from './model/logIn';
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class LogService {
  public url: string = 'http://localhost:3300/details';
  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  getDetails(): Observable<any> {
    return this.http.get(this.url);
  }

  logDetails(data: logIn): Observable<any> {
    return this.http.post(this.url + "/login", data);
  }

  regDetails(data: regIn): Observable<any> {
    return this.http.post(this.url, data);
  }

  delDetails(id: any): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }

  public isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('logIn');
      return !helper.isTokenExpired(token);
    }
  }
}
