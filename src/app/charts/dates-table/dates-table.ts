import {Component, inject} from '@angular/core';
import { TableModule } from 'primeng/table';
import {HttpClient} from '@angular/common/http';
import {ProgressSpinner, ProgressSpinnerModule} from 'primeng/progressspinner';

@Component({
  selector: 'app-dates-table',
  imports: [
    TableModule,
    ProgressSpinner
  ],
  templateUrl: './dates-table.html',
  styleUrl: './dates-table.css'
})
export class DatesTable {
  private apiUrl = 'http://localhost:8000/admin/dates';
  private http = inject(HttpClient);

  dataLoaded = false;
  dates: any[] = [];


  fetchData() {
    this.http.get(this.apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        }
      }
    ).subscribe({
      next: (res) => {
        console.log(res);
        this.dates = Object.entries(res).map(([date, count]) => ({
          date,
          count
        }));
        this.dataLoaded = true;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  constructor() {
    this.fetchData();
  }

}
