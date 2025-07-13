import {Component, inject} from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import {FormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import {AggregateService} from '../../services/aggregate-service';
import {LoginService} from '../../services/login.service';


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


  constructor(private LoginService: LoginService, private AggregateService: AggregateService) {}

  logInAsAdmin():void {
    if (!this.username || !this.password) return;


    this.LoginService.logInAsAdmin(this.username, this.password).subscribe({
      next: (res) => {
        console.log('Login success:', res);
        localStorage.setItem('jwt', res.token);
        this.checkAdmin();
      },
      error: (err) => console.error('Login failed:', err)
    });
  }

  checkAdmin():void{
      this.AggregateService.getAggregateData().subscribe({
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
