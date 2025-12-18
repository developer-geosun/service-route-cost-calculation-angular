import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-whatsapp',
  templateUrl: './icon-whatsapp.component.html',
  styleUrls: ['./icon-whatsapp.component.scss']
})
export class IconWhatsappComponent {
  @Input() url: string = '';
  @Input() title: string = 'WhatsApp';
}
