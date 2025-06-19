import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) { }

  login(email: string, password: string): boolean {
    // Ici, normalement, vous feriez une requête à votre API
    if (email === 'admin@example.com' && password === 'admin123') {
      this.isAuthenticated = true;
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || localStorage.getItem('isLoggedIn') === 'true';
  }
}