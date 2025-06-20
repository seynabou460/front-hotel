import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './inscription.html',
  styleUrls: ['./inscription.css']
})
export class Inscription {
  onSubmit() {
    console.log('Formulaire soumis');
  }
}
