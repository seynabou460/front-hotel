import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import 'zone.js'; // ✅ Ajoute cette ligne si elle n’y est pas

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
