import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-telegram',
  templateUrl: './icon-telegram.component.html',
  styleUrls: ['./icon-telegram.component.scss']
})
export class IconTelegramComponent {
  @Input() url: string = '';
  @Input() title: string = 'Telegram';
}
