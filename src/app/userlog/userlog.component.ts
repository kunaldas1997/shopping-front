import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlog',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './userlog.component.html',
  styleUrl: './userlog.component.scss'
})
export class UserlogComponent {

  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private loginService: LoginService, private router: Router) { }
  jsonData: any;
  onSubmit(): void {


    this.jsonData = this.loginService.loginUser("user/signin", this.login.value).subscribe(
      {
        next: (data: any) => {
          this.jsonData = data;
          localStorage.setItem("token", this.jsonData.data);
          this.router.navigate(['/store'])
        },
        error: (err) => {
          console.log(err.message, err.status);
        }
      });

  }
}
