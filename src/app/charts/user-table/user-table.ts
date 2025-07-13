import {Component, inject} from '@angular/core';
import { TableModule } from 'primeng/table';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-user-table',
  imports: [
    TableModule
  ],
  templateUrl: './user-table.html',
  styleUrl: './user-table.css'
})
export class UserTable {
  private apiUrl = 'http://localhost:8000/admin/players';
  private http = inject(HttpClient);

  dataLoaded = false;
  users: any[] = [];


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
