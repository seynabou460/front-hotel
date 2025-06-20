import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mot-de-passe-oublie',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './mot-de-passe-oublie.html',
  styleUrls: ['./mot-de-passe-oublie.css']
})
export class MotDePasseOublie {
  onSubmit() {
    console.log('Formulaire soumis');
  }
}
