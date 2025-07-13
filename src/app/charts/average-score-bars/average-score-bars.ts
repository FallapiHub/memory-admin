import {Component, inject} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ProgressSpinner} from 'primeng/progressspinner';
import {ChartData} from '../../interfaces/chart-data';
import {ScoreData} from '../../interfaces/score-data';
import {ScoreService} from '../../services/score.service';


@Component({
  selector: 'app-average-score-bars',
  imports: [ChartModule, HttpClientModule, ProgressSpinner],
  templateUrl: './average-score-bars.html',
  styleUrl: './average-score-bars.css'
})
export class AverageScoreBars {
  dataLoaded: boolean = false;


  data: ChartData = {
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

  fetchData(): void {
    this.ScoreService.getAverageScores()
    .subscribe((res) => {
      console.log(res);
      const scores: ScoreData[] = res as ScoreData[];
      this.data.labels = scores.map(entry => entry.username);
      this.data.datasets[0].data = scores.map(entry => entry.score);

      this.dataLoaded = true;

    })
  }

  constructor(private ScoreService: ScoreService) {
    this.fetchData();
  }
}
