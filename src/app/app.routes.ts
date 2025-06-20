import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';

export const appRoutes: Routes = [
  {
    path: '',
    component: Accueil
  },
  {
    path: 'accueil',
    loadComponent: () => import('./pages/accueil/accueil').then(m => m.Accueil)
  },
  {
    path: 'connexion',
    loadComponent: () => import('./pages/connexion/connexion').then(m => m.Connexion)
  },
  {
    path: 'inscription',
    loadComponent: () => import('./pages/inscription/inscription').then(m => m.Inscription)
  },
  {
    path: 'mot-de-passe-oublie',
    loadComponent: () => import('./pages/mot-de-passe-oublie/mot-de-passe-oublie').then(m => m.MotDePasseOublie)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'liste-hotels',
    loadComponent: () => import('./pages/liste-hotels/liste-hotels').then(m => m.ListeHotels)
  },
  {
    path: '**', redirectTo: 'accueil'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

