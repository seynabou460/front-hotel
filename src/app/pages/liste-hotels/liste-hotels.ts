import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-liste-hotels',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './liste-hotels.html',
  styleUrls: ['./liste-hotels.css']
})
export class ListeHotelsComponent { // ← Nom exporté proprement
  hotels = [
    {
      id: 1,
      nom: 'Hôtel Plaza',
      adresse: '12 Rue de la Paix, Paris',
      email: 'contact@plaza.com',
      telephone: '01 23 45 67 89',
      prix: 250000,
      devise: 'FCFA',
      image: 'assets/hotel-plaza.jpg'
    },
    // autres hôtels...
  ];

  supprimerHotel(id: number) {
    this.hotels = this.hotels.filter(hotel => hotel.id !== id);
  }

  ajouterHotel() {
    console.log("Ouverture du formulaire d'ajout");
  }
}