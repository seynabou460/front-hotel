import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  imports: [],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css'
})
export class Inscription {
onSubmit() {
    // Logique de soumission du formulaire
    console.log('Formulaire soumis');
  }
}
