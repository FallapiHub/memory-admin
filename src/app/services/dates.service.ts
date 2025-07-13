import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ScoreData} from '../interfaces/score-data';
import {HttpClient} from '@angular/common/http';
import {DateData} from '../interfaces/date-data';

@Injectable({
  providedIn: 'root'
})
export class DatesService {
  private apiUrl: string = 'http://localhost:8000/admin/dates';
  getDates(): Observable<DateData> {
    return this.http.get<DateData>(this.apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        }
      }
    )
  }


  constructor(private http: HttpClient) {
  }

}
