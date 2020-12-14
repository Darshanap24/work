import { Component } from '@angular/core';
import { GlobalToaster } from './global/globalToaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public globalToaster: GlobalToaster) {
  }
}
