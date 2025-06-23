import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
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
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
    canActivate: [AuthGuard]
  },
  {
    path: 'liste-hotels',
    loadComponent: () => import('./pages/liste-hotels/liste-hotels').then(m => m.ListeHotelsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'accueil'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}