import { Component } from '@angular/core';
import { REQUEST } from '../data/mockRequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web Socket Viewer';
  version = '0.1';

  request = REQUEST;
}
