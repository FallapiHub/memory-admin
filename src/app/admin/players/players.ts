import { Component } from '@angular/core';
import {UserTable} from '../../charts/user-table/user-table';

@Component({
  selector: 'app-players',
  imports: [UserTable],
  templateUrl: './players.html',
  styleUrl: './players.css'
})
export class Players {

}
