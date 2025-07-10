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


  private apiUrl = 'http://localhost:8000/memory/login';
  constructor(private http: HttpClient) {}

  logInAsAdmin() {
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

  checkAdmin(){
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

//
//
// <script>
// const notification = document.getElementById('notification');
// notification.innerHTML=""
//
// const check = () => {
//   let password = document.getElementById('password').value;
//   let username = document.getElementById('username').value;
//
//
//   fetch('http://localhost:8000/memory/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({username: username, password: password}),
//   })
//     .then(resp => {
//       if (!resp.ok) {
//         throw new Error("Login mislukt");
//       }
//       return resp.json();
//     })
//     .then(json => {
//       console.log(json)
//       localStorage.setItem("jwt", JSON.stringify(json))
//       notification.innerHTML = "Je bent ingelogd";
//       window.location.href = 'memory.html';
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       notification.innerHTML = error;
//
//     });
// }
//
// document.getElementById('submit').addEventListener('click', c => check())
// document.getElementById('register').addEventListener('click', c => {
//   window.location.href = 'register.html';
// })
//
// </script>
