import { Component } from '@angular/core';
import { REQUEST } from '../data/mockRequest';
import { MatTableDataSource } from '@angular/material';

const FRAME_DATA: Frame[] = [
  { time: '1563369677.115286', type: 'send', text: 'john@gmail.com' },
  { time: '1563369677.314347', type: 'send', text: 'mike@gmail.com' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web Socket Viewer';
  version = '0.1';

  request = REQUEST;
  displayedColumns = ['type', 'text', 'time'];
  dataSource = new MatTableDataSource(FRAME_DATA);
}

export interface Frame {
  // TODO make time a date and format it.
  time: string;
  type: string;
  text: string;
}


