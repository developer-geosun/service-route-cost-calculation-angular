import { Component } from '@angular/core';
import { ConfigService } from '../../core/services/config.service';

/**
 * Компонент футера
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(public configService: ConfigService) {}
}

