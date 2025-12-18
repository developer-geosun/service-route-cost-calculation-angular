import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-viber',
  templateUrl: './icon-viber.component.html',
  styleUrls: ['./icon-viber.component.scss']
})
export class IconViberComponent {
  @Input() url: string = '';
  @Input() title: string = 'Viber';
}
