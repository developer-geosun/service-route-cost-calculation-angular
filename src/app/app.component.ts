import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'services-route-calculation-angular';
  
  // Настройка телефона для мессенджеров
  phoneNumber = '+380984894118';
  phoneNumberForWhatsApp = '380984894118'; // без знака +
  
  // URL для социальных сетей
  facebookUrl = 'https://www.facebook.com/profile.php?id=100063988064019';
  
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
