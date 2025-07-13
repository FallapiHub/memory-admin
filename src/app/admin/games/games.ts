import { Component } from '@angular/core';
import { ApiChart } from '../../charts/api-chart/api-chart'
import {DatesChart} from '../../charts/dates-chart/dates-chart';


@Component({
  selector: 'app-games',
  imports: [ApiChart, DatesChart],
  templateUrl: './games.html',
  styleUrl: './games.css'
})
export class Games {

}
