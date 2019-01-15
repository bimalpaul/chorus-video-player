import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router/';
import {ChorusVideoService} from '../chorus-video.service';
import {ITranscript} from '../models/transcript';

@Component({
  selector: 'chorus-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  id = '';
  videoUrl = '';
  transcript: ITranscript[] = [];
  displayedTranscript: ITranscript[] = [];
  showVideoError = false;
  currentTime: number;
  errorText = 'Invalid ID/No ID. Please append a valid ID to the URL';

  @Output() transcriptChanged: EventEmitter<ITranscript[]> = new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute, private videoService: ChorusVideoService) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.showVideoError = false;
      this.id = params['id'];
      if (this.id !== '') {
        this.videoService.getVideo(this.id)
          .subscribe(video => {
            this.videoUrl = video;
          });
        this.videoService.getTranscript(this.id)
          .subscribe(transcript => {
            this.transcript = transcript;
          });
      } else {
        this.showVideoError = true;
      }
    });
  }

  private setCurrentTime(data) {
    this.currentTime = data.target.currentTime;
    this.displayTranscript();
    this.backtrackTranscript();
    this.transcriptChanged.emit(this.displayedTranscript);
  }

  private getPreviousEntryWithSpeaker = () => {
    const entriesWithSpeakers = this.displayedTranscript.filter(tr => tr.speaker != null);
    const len = entriesWithSpeakers.length;
    return entriesWithSpeakers[len - 1];
  }

  private displayTranscript = () => {
    const transcriptEntryLength = this.displayedTranscript.length;
    this.transcript.forEach(tran => {
      if (tran.time < this.currentTime) {
        if (!this.displayedTranscript.find(tr => tr.time === tran.time)) {
          if (transcriptEntryLength > 0 && this.getPreviousEntryWithSpeaker().speaker === tran.speaker) {
            tran.speaker = null;
          }
          this.displayedTranscript.push(tran);
        }
      }
    });
  }

  private backtrackTranscript = () => {
    this.displayedTranscript.forEach((tran, index) => {
      if (tran.time > this.currentTime) {
        this.displayedTranscript.splice(index, 1);
      }
    });
  }

}
