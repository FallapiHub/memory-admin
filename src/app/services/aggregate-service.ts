import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AggregateData } from '../interfaces/aggregate-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AggregateService {
  private apiUrl: string = 'http://localhost:8000/admin/aggregate';

  constructor(private http: HttpClient) {}

  getAggregateData(): Observable<AggregateData> {
    return this.http.get<AggregateData>(this.apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    });
  }
}
