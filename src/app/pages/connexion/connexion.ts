import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion',
  imports: [],
  templateUrl: './connexion.html',
  styleUrl: './connexion.css'
})
export class Connexion {
onSubmit() {
    // Logique de soumission du formulaire
    console.log('Formulaire soumis');
  }
}

