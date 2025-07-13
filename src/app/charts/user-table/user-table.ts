import {Component, inject} from '@angular/core';
import { TableModule } from 'primeng/table';
import {HttpClient} from '@angular/common/http';
import {ProgressSpinner, ProgressSpinnerModule} from 'primeng/progressspinner';
import { UserData } from '../../interfaces/user-data';




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
  private apiUrl: string = 'http://localhost:8000/admin/players';
  private http: HttpClient = inject(HttpClient);

  dataLoaded: boolean = false;
  users: UserData[] = [];


  fetchData(): void {
    this.http.get(this.apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        }
      }
    ).subscribe({
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

  constructor() {
    this.fetchData();
  }

}
