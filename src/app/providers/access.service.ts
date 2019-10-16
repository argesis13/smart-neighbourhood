import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor() {
  }

  observeMessages(sseUrl: string): Observable<string> {
    return new Observable<string>(obs => {
      const es = new EventSource(sseUrl);
      es.addEventListener('message', (evt) => {
        obs.next(evt.data);
      });
      return () => es.close();
    });
  }
}
