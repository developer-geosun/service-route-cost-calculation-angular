import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  // Настройка ссылки логотипа
  logoUrl = 'https://www.geosun.net.ua';
  
  // Настройки для социальных сетей
  private readonly phoneNumber = '+380984894118';
  private readonly phoneNumberForWhatsApp = '380984894118'; // без знака +
  
  get telegramUrl(): string {
    return `https://t.me/${this.phoneNumber}`;
  }
  
  get whatsAppUrl(): string {
    return `https://wa.me/${this.phoneNumberForWhatsApp}`;
  }
  
  get viberUrl(): string {
    return `viber://chat?number=${encodeURIComponent(this.phoneNumber)}`;
  }
  
  facebookUrl = 'https://www.facebook.com/profile.php?id=100063988064019';
}
