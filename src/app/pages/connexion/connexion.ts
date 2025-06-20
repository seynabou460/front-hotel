import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './connexion.html',
  styleUrls: ['./connexion.css']
})
export class Connexion {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  onSubmit(event: Event) {
  event.preventDefault();
  if (isPlatformBrowser(this.platformId)) {
    this.router.navigate(['/dashboard']);
  }
}
}
