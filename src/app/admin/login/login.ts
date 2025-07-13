import {Component, inject} from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import {FormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputGroupAddonModule, InputGroupModule, PasswordModule, FormsModule, InputText, HttpClientModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username: string | undefined;
  password: string | undefined;


  private apiUrl: string = 'http://localhost:8000/memory/login';
  constructor(private http: HttpClient) {}

  logInAsAdmin():void {
    const payload = {
      username: this.username,
      password: this.password
    };

    this.http.post<{ token: string }>(this.apiUrl, payload, {
      headers: {
        'Content-Type': 'application/json'
      },
    }).subscribe({
      next: (res) => {
        console.log('Login success:', res);
        localStorage.setItem('jwt', res.token);
        this.checkAdmin();
      },
      error: (err) => console.error('Login failed:', err)
    });
  }

  checkAdmin():void{
      this.http.get("http://localhost:8000/admin/aggregate", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt')
          }
        }
      ).subscribe({
        next: (res) => {
          console.log('Login success:', res);
        },
        error: (err) => {
          console.error('Login failed:', err);
          localStorage.removeItem('jwt');
        }
      })
  }


}
