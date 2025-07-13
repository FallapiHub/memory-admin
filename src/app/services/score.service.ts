import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScoreData } from '../interfaces/score-data';
import {ChartData} from '../interfaces/chart-data';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  getAverageScores(): Observable<ScoreData[]> {
    return this.http.get<ScoreData[]>('http://localhost:8000/memory/scores', {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  }

  getTopScores(): Observable<ScoreData[]> {
    return this.http.get<ScoreData[]>('http://localhost:8000/memory/top-scores', {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  }


  constructor(private http: HttpClient) {
  }
}
