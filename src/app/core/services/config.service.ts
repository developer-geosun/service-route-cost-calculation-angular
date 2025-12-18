import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../shared/constants/app.constants';
import { environment } from '../../../environments/environment';

/**
 * Сервіс для управління конфігурацією додатку
 * Надає доступ до констант та налаштувань
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // Конфігурація додатку
  readonly config = APP_CONFIG;
  
  // Налаштування середовища
  readonly environment = environment;

  /**
   * Отримує URL для Telegram
   */
  get telegramUrl(): string {
    return `https://t.me/${this.config.phoneNumber}`;
  }

  /**
   * Отримує URL для WhatsApp
   */
  get whatsAppUrl(): string {
    return `https://wa.me/${this.config.phoneNumberForWhatsApp}`;
  }

  /**
   * Отримує URL для Viber
   */
  get viberUrl(): string {
    return `viber://chat?number=${encodeURIComponent(this.config.phoneNumber)}`;
  }

  /**
   * Отримує URL для Facebook
   */
  get facebookUrl(): string {
    return this.config.facebookUrl;
  }

  /**
   * Отримує URL логотипу
   */
  get logoUrl(): string {
    return this.config.logoUrl;
  }
}

