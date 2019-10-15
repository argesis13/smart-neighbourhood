import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyDetailsService {

  constructor(private http: HttpClient) {

  }

  public getFamily (username: String): Observable<any> {
    return this.http.get('http://localhost:8282/users/' + username + '/family' );
  }

  public getFamilyNumber(username: String): Observable<any> {
    return this.http.get('http://localhost:8282/users/' + username + '/family' ).pipe(
      map(res => {
        const members = res['members'] as [];
        return members.length;
      })
    );
  }

}
