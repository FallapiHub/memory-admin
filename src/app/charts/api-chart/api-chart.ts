import {Component, inject} from '@angular/core';
import {ChartModule} from 'primeng/chart';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ProgressSpinner} from 'primeng/progressspinner';
import {ChartData} from '../../interfaces/chart-data';
import {AggregateData} from '../../interfaces/aggregate-data';
import {ApiData} from '../../interfaces/api-data';


@Component({
  selector: 'app-api-chart',
  standalone: true,
  imports: [ChartModule, HttpClientModule, ProgressSpinner],
  templateUrl: './api-chart.html',
  styleUrl: './api-chart.css'
})
export class ApiChart {
  private apiUrl: string = 'http://localhost:8000/admin/aggregate';
  private http: HttpClient = inject(HttpClient);
  dataLoaded: boolean = false;


  data: ChartData = {
    labels: [],
    datasets: [
      {
        label: 'API usage',
        data: [],
        backgroundColor: [
          '#f87171',
          '#60a5fa',
          '#facc15',
          '#34d399',
          '#a78bfa',
          '#fb923c'
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
        text: 'Games per API'
      }
    }
  };

  fetchData(): void {
    this.http.get(this.apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        }
      }
    ).subscribe((res) => {
      console.log(res);
      const values: AggregateData = Object.values(res) as AggregateData;
      const apiStats: ApiData[] = values[2];

      this.data.labels = apiStats.map(entry => entry.api);
      this.data.datasets[0].data = apiStats.map(entry => entry.aantal);

      this.dataLoaded = true;

    })
  }

  constructor() {
    this.fetchData();
  }
}
