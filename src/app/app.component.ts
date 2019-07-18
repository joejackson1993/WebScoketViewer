import { Component } from '@angular/core';
import { REQUEST } from '../data/mockRequest';
import { MatTableDataSource } from '@angular/material';

// probably need to pull this out into a service at some point and actually contruct the right objects from the json.
const FRAME_DATA: any[] = formatFrames(REQUEST._frames);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web Socket Viewer';
  version = '0.1';

  request = REQUEST;
  displayedColumns = ['time', 'type', 'channel', 'clientId', 'successful', 'subscription', 'text'];
  dataSource = new MatTableDataSource(FRAME_DATA);
}

function formatFrames(frames: any) {

  const formattedFrames = frames.map(frame => {
    return {
      time: frame.time,
      type: frame.type,
      channel: JSON.parse(frame.text)[0].channel,
      clientId: JSON.parse(frame.text)[0].clientId,
      successful: JSON.parse(frame.text)[0].successful,
      subscription: JSON.parse(frame.text)[0].subscription,
      text: JSON.parse(frame.text)
    };
  });
  return formattedFrames;
}
