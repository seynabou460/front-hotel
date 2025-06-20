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
export class ListeHotels {
  hotels = [
    {
      id: 1,
      nom: 'Hôtel Plaza',
      adresse: '12 Rue de la Paix, Paris',
      etoiles: 5,
      image: 'assets/hotel-plaza.jpg'
    },
    {
      id: 2,
      nom: 'Residence Les Pins',
      adresse: '45 Boulevard des Plages, Nice',
      etoiles: 4,
      image: 'assets/residence-pins.jpg'
    },
    {
      id: 3,
      nom: 'Château Mont Royal',
      adresse: 'Chemin des Vignes, Bordeaux',
      etoiles: 5,
      image: 'assets/chateau-montroyal.jpg'
    }
  ];

  supprimerHotel(id: number) {
    this.hotels = this.hotels.filter(hotel => hotel.id !== id);
  }

  ajouterHotel() {
    // Logique pour ouvrir un modal/formulaire
    console.log('Ouverture du formulaire d\'ajout');
  }
}