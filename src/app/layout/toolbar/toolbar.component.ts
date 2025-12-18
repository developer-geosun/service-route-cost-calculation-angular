import { Component } from '@angular/core';
import { ThemeService, Theme } from '../../core/services/theme.service';
import { ConfigService } from '../../core/services/config.service';

/**
 * Компонент панелі інструментів (toolbar)
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  // Використовуємо async pipe для автоматичної відписки
  theme$ = this.themeService.theme$;

  constructor(
    private themeService: ThemeService,
    public configService: ConfigService
  ) {}

  /**
   * Перемикає тему
   */
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  /**
   * Отримує поточну тему для aria-label
   */
  getThemeLabel(theme: Theme | null): string {
    return theme === 'light' ? 'Переключити на темну тему' : 'Переключити на світлу тему';
  }

  /**
   * Отримує заголовок для кнопки теми
   */
  getThemeTitle(theme: Theme | null): string {
    return theme === 'light' ? 'Темна тема' : 'Світла тема';
  }

  /**
   * Отримує іконку для кнопки теми
   */
  getThemeIcon(theme: Theme | null): string {
    return theme === 'light' ? 'dark_mode' : 'light_mode';
  }
}

