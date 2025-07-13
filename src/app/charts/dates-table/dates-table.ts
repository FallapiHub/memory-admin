import {Component, inject} from '@angular/core';
import { TableModule } from 'primeng/table';
import {HttpClient} from '@angular/common/http';
import {ProgressSpinner, ProgressSpinnerModule} from 'primeng/progressspinner';
import {DateData} from '../../interfaces/date-data';
import {DatesService} from '../../services/dates.service';


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
  dataLoaded: boolean = false;
  dates: Array<{ date: string; count: number }>  = [];


  fetchData(): void {
    this.DatesService.getDates().subscribe({
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

  constructor(private DatesService: DatesService) {
    this.fetchData();
  }
}
