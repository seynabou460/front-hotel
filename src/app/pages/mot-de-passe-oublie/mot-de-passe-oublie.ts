import { Component } from '@angular/core';

@Component({
  selector: 'app-mot-de-passe-oublie',
  imports: [],
  templateUrl: './mot-de-passe-oublie.html',
  styleUrl: './mot-de-passe-oublie.css'
})
export class MotDePasseOublie {
onSubmit() {
    // Logique de soumission du formulaire
    console.log('Formulaire soumis');
  }
}
