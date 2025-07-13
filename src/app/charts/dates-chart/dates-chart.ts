import {Component, inject} from '@angular/core';
import {ChartModule} from 'primeng/chart';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ProgressSpinner} from 'primeng/progressspinner';
import {ChartData} from '../../interfaces/chart-data';
import {DateData} from '../../interfaces/date-data';


@Component({
  selector: 'app-dates-chart',
  imports: [ChartModule, HttpClientModule, ProgressSpinner],
  templateUrl: './dates-chart.html',
  styleUrl: './dates-chart.css'
})
export class DatesChart {
  private apiUrl: string = 'http://localhost:8000/admin/dates';
  private http: HttpClient = inject(HttpClient);
  dataLoaded: boolean = false;


  data: ChartData = {
    labels: [],
    datasets: [
      {
        label: 'Amount of Games',
        data: [],
        backgroundColor: []
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
        text: 'Games per Date'
      }
    }
  };

  fetchData(): void {
    this.http.get<DateData>(this.apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        }
      }
    ).subscribe((res) => {
      console.log(res);
      this.data.labels = Object.keys(res);
      this.data.datasets[0].data = Object.values(res);


      this.dataLoaded = true;

    })
  }

  constructor() {
    this.fetchData();
  }
}
