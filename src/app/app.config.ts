import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(
      () =>
        initializeApp
          (
            {
              "projectId": "saudefacil-a1610",
              "appId": "1:73739086177:web:677b0e19c46c2510acfd20",
              "storageBucket": "saudefacil-a1610.firebasestorage.app",
              "apiKey": "AIzaSyAA3d4CCTI1U1Gl_aaIIazGqy9Tz-ykNAQ",
              "authDomain": "saudefacil-a1610.firebaseapp.com",
              "messagingSenderId": "73739086177",
              "measurementId": "G-YYTB6D3RR7"
            }
          )
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ]
};
