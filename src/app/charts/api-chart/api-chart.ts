import {Component, inject} from '@angular/core';
import {ChartModule} from 'primeng/chart';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-api-chart',
  standalone: true,
  imports: [ChartModule, HttpClientModule],
  templateUrl: './api-chart.html',
  styleUrl: './api-chart.css'
})
export class ApiChart {
  private apiUrl = 'http://localhost:8000/admin/aggregate';
  private http = inject(HttpClient);
  dataLoaded = false;


  data: any = {
    labels: [],
    datasets: [
      {
        label: 'Aantal per API',
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
        text: 'Aantal per API'
      }
    }
  };

  fetchData() {
    this.http.get(this.apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        }
      }
    ).subscribe((res) => {
      console.log(res);
      const values = Object.values(res);
      const apiStats = values[2] as Array<{ api: string; aantal: number }>;

      this.data.labels = apiStats.map(entry => entry.api);
      this.data.datasets[0].data = apiStats.map(entry => entry.aantal);
      console.log('Chart data:', this.data);
      console.log('Chart data.data:', this.data.data);
      console.log('Chart data.labels:', this.data.labels);

      this.dataLoaded = true;

    })
  }

  constructor() {
    this.fetchData();
  }
}
