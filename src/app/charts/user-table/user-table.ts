import {Component, inject} from '@angular/core';
import { TableModule } from 'primeng/table';
import {HttpClient} from '@angular/common/http';
import {ProgressSpinner, ProgressSpinnerModule} from 'primeng/progressspinner';
import { UserData } from '../../interfaces/user-data';
import { UsersService } from '../../services/users.service';




@Component({
  selector: 'app-user-table',
  imports: [
    TableModule,
    ProgressSpinner
  ],
  templateUrl: './user-table.html',
  styleUrl: './user-table.css'
})
export class UserTable {


  dataLoaded: boolean = false;
  users: UserData[] = [];


  fetchData(): void {
    this.UsersService.getUsers()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.users = Object.values(res);
          this.dataLoaded = true;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

  constructor(private UsersService: UsersService) {
    this.fetchData();
  }

}
