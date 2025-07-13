import {Component, inject} from '@angular/core';
import {ChartModule} from 'primeng/chart';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ProgressSpinner} from 'primeng/progressspinner';


@Component({
  selector: 'app-dates-chart',
  imports: [ChartModule, HttpClientModule, ProgressSpinner],
  templateUrl: './dates-chart.html',
  styleUrl: './dates-chart.css'
})
export class DatesChart {
  private apiUrl = 'http://localhost:8000/admin/dates';
  private http = inject(HttpClient);
  dataLoaded = false;


  data: any = {
    labels: [],
    datasets: [
      {
        label: 'Amount of Games',
        data: [],
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

  fetchData() {
    this.http.get(this.apiUrl, {
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
