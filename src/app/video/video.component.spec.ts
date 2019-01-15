import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VideoComponent} from './video.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {DebugElement} from '@angular/core';


describe('VideoComponent Valid ID', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;
  const videoId = 'abc-def';
  const route = ({queryParams: of({id: videoId})} as any) as ActivatedRoute;
  let nativeElement: HTMLElement;
  let debugElement: DebugElement;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [VideoComponent],
      providers: [{provide: ActivatedRoute, useValue: route}],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
    nativeElement = debugElement.nativeElement;
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should play video with ID provided', () => {
    const expectedVideoSrc = `https://static.chorus.ai/api/${videoId}.mp4`;
    expect(component).toBeTruthy();
    const videoComponent = nativeElement.querySelector('#videoSource');
    expect(videoComponent.getAttribute('src')).toBe(expectedVideoSrc);
  });

  it('should get transcript', () => {
    const expectedTranscriptEndpoint = `https://static.chorus.ai/api/${videoId}.json`;
    httpMock.expectOne(expectedTranscriptEndpoint);
  });
});
