import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth'; // Importez AuthService au lieu de Auth

describe('AuthService', () => { // Renommez la description
  let service: AuthService; // Utilisez AuthService comme type

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, // Nécessaire pour HttpClient
        RouterTestingModule // Nécessaire pour Router
      ],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService); // Injectez AuthService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Ajoutez des tests supplémentaires ici
  it('should return false for isLoggedIn() when no token', () => {
    localStorage.removeItem('token');
    expect(service.isLoggedIn()).toBeFalse();
  });

  it('should return true for isLoggedIn() when token exists', () => {
    localStorage.setItem('token', 'fake-token');
    expect(service.isLoggedIn()).toBeTrue();
  });
});