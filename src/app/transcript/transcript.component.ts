import {Component, Input, OnInit} from '@angular/core';
import {ITranscript} from '../models/transcript';

@Component({
  selector: 'chorus-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss']
})
export class TranscriptComponent implements OnInit {

  @Input() transcript: ITranscript[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
