import {Component} from '@angular/core';
import {ITranscript} from './models/transcript';

@Component({
  selector: 'chorus-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Moment from meeting with Two Pillars';
  transcript: ITranscript[] = [];

  setTranscript = (transcript: ITranscript[]) => {
    this.transcript = transcript;
  }
}
