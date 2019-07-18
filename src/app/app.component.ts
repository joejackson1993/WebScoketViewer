import { Component, ViewChild } from '@angular/core';
//import { REQUEST } from '../data/mockRequest';
import { MatTableDataSource, MatSort } from '@angular/material';
import * as moment from 'moment';

// probably need to pull this out into a service at some point and actually contruct the right objects from the json.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Web Socket Viewer';
  version = '1.0';
  request: any;
  displayedColumns = ['time', 'type', 'channel', 'clientId', 'successful', 'subscription', 'text'];
  dataSource = new MatTableDataSource([{'': ''}]);
  selectedFile: File;
  fileContent: string;


  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, 'UTF-8');
    fileReader.onload = () => {

      // need to find out the best way to handle multiple requests...
      // maybe just duplcate the table for each results from JSON.
      this.request = JSON.parse(fileReader.result as string)[0];
      const FRAME_DATA: any[] = formatFrames(this.request._frames);
      this.dataSource = new MatTableDataSource(FRAME_DATA);
    };
    fileReader.onerror = (error) => {
      console.log(error);
      alert('There was an error uploading the file');
    };
  }
}

function formatFrames(frames: any) {

  const formattedFrames = frames.map(frame => {
    return {
      time: moment.unix(frame.time).format('MMMM Do, YYYY HH:mm:ss.SSS'),
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
