import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {
  let fixture, app, compiled;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have title`, () => {
    expect(app.title).toEqual('Moment from meeting with Two Pillars');
  });

  it('should render title in a h3 tag', () => {
    fixture.detectChanges();
    expect(compiled.querySelector('#pageTitle').textContent).toContain(app.title);
  });

  it('should render the video component', () => {
    fixture.detectChanges();
    const videoComponent = compiled.querySelector('chorus-video');
    expect(videoComponent).toBeTruthy();
  });

  it('should render the transcript component', () => {
    fixture.detectChanges();
    const transcriptComponent = compiled.querySelector('chorus-transcript');
    expect(transcriptComponent).toBeTruthy();
  });

  it('should render a footer with the chorus logo', () => {

  });
});
