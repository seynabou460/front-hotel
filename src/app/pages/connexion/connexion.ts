import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './connexion.html',
  styleUrls: ['./connexion.css']
})
export class Connexion {
  email = '';
  password = '';
  erreur = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log('✅ Connexion réussie', res);
        this.router.navigate(['/dashboard']); // ou toute autre page protégée
      },
      error: (err) => {
        console.error('❌ Erreur de connexion', err);
        this.erreur = 'Email ou mot de passe incorrect.';
      }
    });
  }
}