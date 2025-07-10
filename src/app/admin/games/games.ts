import { Component } from '@angular/core';
import { ApiChart } from '../../charts/api-chart/api-chart'


@Component({
  selector: 'app-games',
  imports: [ApiChart],
  templateUrl: './games.html',
  styleUrl: './games.css'
})
export class Games {

}
