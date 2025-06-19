import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { Connexion } from './pages/connexion/connexion';
import { Inscription } from './pages/inscription/inscription';
import { MotDePasseOublie } from './pages/mot-de-passe-oublie/mot-de-passe-oublie';
import { Dashboard } from './pages/dashboard/dashboard';
import { ListeHotels } from './pages/liste-hotels/liste-hotels';


export const appRoutes: Routes = [
  { path: '', component: Accueil },
  { path: 'connexion', component: Connexion },
  { path: 'inscription', component: Inscription },
  { path: 'mot-de-passe-oublie', component: MotDePasseOublie },
  { path: 'dashboard', component: Dashboard },
  { path: 'liste-hotels', component: ListeHotels },
  { path: '**', redirectTo: '' } // Redirection pour les routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

