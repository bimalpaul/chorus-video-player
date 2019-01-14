import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { TranscriptComponent } from './transcript/transcript.component';
import {RouterModule} from '@angular/router';
import {ChorusVideoService} from './chorus-video.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    TranscriptComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule
  ],
  providers: [ChorusVideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
