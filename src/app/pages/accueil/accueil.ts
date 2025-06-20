import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterModule], // Nécessaire pour routerLink
  templateUrl: './accueil.html',
  styleUrls: ['./accueil.css']
})
export class Accueil {}
