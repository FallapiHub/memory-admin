import { Component } from '@angular/core';
import { ApiChart } from '../../charts/api-chart/api-chart'
import {DatesChart} from '../../charts/dates-chart/dates-chart';
import {AverageScoreBars} from '../../charts/average-score-bars/average-score-bars';
import {TopScoreBars} from '../../charts/top-score-bars/top-score-bars';


@Component({
  selector: 'app-games',
  imports: [ApiChart, DatesChart, AverageScoreBars, TopScoreBars],
  templateUrl: './games.html',
  styleUrl: './games.css'
})
export class Games {

}
