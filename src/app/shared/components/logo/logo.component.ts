import { Component } from '@angular/core';
import { ConfigService } from '../../../core/services/config.service';

/**
 * Компонент логотипу GeoSun
 */
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  standalone: false
})
export class LogoComponent {
  constructor(public configService: ConfigService) {}
}

