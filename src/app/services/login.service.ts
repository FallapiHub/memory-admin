import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl: string = 'http://localhost:8000/memory/login';
  constructor(private http: HttpClient) {}

  logInAsAdmin(username:string, password:string): Observable<{ token: string}> {
    const payload = {
      username: username,
      password: password
    };

    return this.http.post<{ token: string }>(this.apiUrl, payload, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }

}
