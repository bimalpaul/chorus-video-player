import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChorusVideoService {

  videoApi = 'https://static.chorus.ai/api/';

  constructor(private http: HttpClient) {
  }

  getVideo = (id: string): Observable<any> => {
    return of(this.videoApi + id + '.mp4');
  }

  getTranscript = (id: string): any => {
    return this.http.get(this.videoApi + id + '.json');
  }
}
