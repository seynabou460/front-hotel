import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { of, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private readonly apiUrl = `${environment.apiUrl}/auth`;
  public authStateChanged = new Subject<boolean>();

  constructor(
    private router: Router,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        this.setAuthState(true, response.token);
        this.router.navigate(['/dashboard']);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('❌ Échec de connexion :', error.message);
        return of(null);
      })
    );
  }

  logout(): void {
    this.setAuthState(false, null);
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || !!this.getToken();
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

  private setAuthState(isAuthenticated: boolean, token: string | null): void {
    this.isAuthenticated = isAuthenticated;
    if (isPlatformBrowser(this.platformId)) {
      if (token) {
        localStorage.setItem('token', token);
      } else {
        localStorage.removeItem('token');
      }
    }
    this.authStateChanged.next(isAuthenticated);
  }
}