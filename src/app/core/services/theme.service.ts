import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Theme = 'light' | 'dark';

/**
 * Сервіс для управління темою додатку (світла/темна)
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';
  private themeSubject: BehaviorSubject<Theme>;
  public theme$: Observable<Theme>;

  constructor() {
    // Отримуємо збережену тему або використовуємо світлу за замовчуванням
    const savedTheme = this.getSavedTheme();
    this.themeSubject = new BehaviorSubject<Theme>(savedTheme);
    this.theme$ = this.themeSubject.asObservable();
    this.applyTheme(savedTheme);
  }

  /**
   * Отримує поточну тему
   */
  get currentTheme(): Theme {
    return this.themeSubject.value;
  }

  /**
   * Перемикає тему між світлою та темною
   */
  toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  /**
   * Встановлює конкретну тему
   */
  setTheme(theme: Theme): void {
    this.themeSubject.next(theme);
    this.applyTheme(theme);
    this.saveTheme(theme);
  }

  /**
   * Застосовує тему до body елемента
   */
  private applyTheme(theme: Theme): void {
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }

  /**
   * Отримує збережену тему з localStorage
   */
  private getSavedTheme(): Theme {
    const saved = localStorage.getItem(this.THEME_KEY);
    return (saved === 'dark' || saved === 'light') ? saved : 'light';
  }

  /**
   * Зберігає тему в localStorage
   */
  private saveTheme(theme: Theme): void {
    localStorage.setItem(this.THEME_KEY, theme);
  }
}

