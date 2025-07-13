import {Component, inject} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ProgressSpinner} from 'primeng/progressspinner';

@Component({
  selector: 'app-average-score-bars',
  imports: [ChartModule, HttpClientModule, ProgressSpinner],
  templateUrl: './average-score-bars.html',
  styleUrl: './average-score-bars.css'
})
export class AverageScoreBars {
  private apiUrl = 'http://localhost:8000/memory/scores';
  private http = inject(HttpClient);
  dataLoaded = false;


  data: any = {
    labels: [],
    datasets: [
      {
        label: 'Average score',
        data: [],
        backgroundColor: [
          '#a78bfa'
        ]
      }
    ]
  };

  options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'All Average Scores'
      }
    }
  };

  fetchData() {
    this.http.get(this.apiUrl, {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    ).subscribe((res) => {
      console.log(res);
      const scores = res as Array<{ username: string, score: number }>;
      this.data.labels = scores.map(entry => entry.username);
      this.data.datasets[0].data = scores.map(entry => entry.score);

      this.dataLoaded = true;

    })
  }

  constructor() {
    this.fetchData();
  }
}
