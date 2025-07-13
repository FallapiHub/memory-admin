import { Component } from '@angular/core';
import {DatesChart} from '../../charts/dates-chart/dates-chart';
import {DatesTable} from '../../charts/dates-table/dates-table';

@Component({
  selector: 'app-dates',
  imports: [
    DatesChart,
    DatesTable
  ],
  templateUrl: './dates.html',
  styleUrl: './dates.css'
})
export class Dates {

}
