import {Component, inject} from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import {FormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import {AggregateService} from '../../services/aggregate-service';
import {LoginService} from '../../services/login.service';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';





@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputGroupAddonModule,
    InputGroupModule,
    PasswordModule,
    FormsModule,
    InputText,
    HttpClientModule,
    ToastModule,
    MessageModule
  ],
  providers: [MessageService],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username: string | undefined;
  password: string | undefined;


  constructor(private LoginService: LoginService,
              private AggregateService: AggregateService,
              private messageService: MessageService) {}

  logInAsAdmin():void {
    if (!this.username || !this.password) return;


    this.LoginService.logInAsAdmin(this.username, this.password).subscribe({
      next: (res) => {
        console.log('Login success:', res);
        localStorage.setItem('jwt', res.token);
        this.checkAdmin();
      },
      error: (err) => {
        console.error('Login failed:', err)
        this.messageService.add({
          severity: 'error',
          summary: 'Cannot login',
          detail: 'Try again'
        });
      }
    })
  }

  checkAdmin():void{
      this.AggregateService.getAggregateData().subscribe({
        next: (res) => {
          console.log('Login success:', res);
          this.messageService.add({
            severity: 'success',
            summary: 'Login success',
            detail: 'Welcome admin '
          });
        },
        error: (err) => {
          console.error('Login failed:', err);
          localStorage.removeItem('jwt');
          this.messageService.add({
            severity: 'error',
            summary: 'LOL NO ADMIN',
            detail: 'Take a walk buddy. you dont belong here'
          });
        }
      })
  }


}
