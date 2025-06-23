import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'; // Ajout de RouterOutlet
import { AuthService } from './services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet // Ajouté ici
  ],
  template: `
    <header>
      <nav *ngIf="isLoggedIn">
        <button (click)="logout()">Déconnexion</button>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}