import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-facebook',
  templateUrl: './icon-facebook.component.html',
  styleUrls: ['./icon-facebook.component.scss']
})
export class IconFacebookComponent {
  @Input() url: string = '';
  @Input() title: string = 'Facebook';
}
