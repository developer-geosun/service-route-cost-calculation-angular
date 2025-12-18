import { Component, OnInit } from '@angular/core';
import { ThemeService, Theme } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'services-route-calculation-angular';
  currentTheme: Theme = 'light';
  
  // Настройка телефона для мессенджеров
  phoneNumber = '+380984894118';
  phoneNumberForWhatsApp = '380984894118'; // без знака +
  
  // URL для социальных сетей
  facebookUrl = 'https://www.facebook.com/profile.php?id=100063988064019';
  
  constructor(private themeService: ThemeService) {}
  
  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }
  
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
  
  get telegramUrl(): string {
    return `https://t.me/${this.phoneNumber}`;
  }
  
  get whatsAppUrl(): string {
    return `https://wa.me/${this.phoneNumberForWhatsApp}`;
  }
  
  get viberUrl(): string {
    return `viber://chat?number=${encodeURIComponent(this.phoneNumber)}`;
  }
}
