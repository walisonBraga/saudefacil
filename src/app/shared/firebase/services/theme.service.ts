import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Verificar se está no navegador antes de acessar o localStorage
    if (isPlatformBrowser(this.platformId)) {
      this.darkMode = localStorage.getItem('darkMode') === 'enabled';
      this.updateBodyClass();
    }
  }

  toggleDarkMode(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.darkMode = !this.darkMode;
      localStorage.setItem('darkMode', this.darkMode ? 'enabled' : 'disabled');
      this.updateBodyClass();
    }
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }

  private updateBodyClass(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }
  }
}
