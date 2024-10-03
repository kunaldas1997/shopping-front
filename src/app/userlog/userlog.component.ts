import { HttpClient } from '@angular/common/http';
import { Component, } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-userlog',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgFor],
  templateUrl: './userlog.component.html',
  styleUrl: './userlog.component.scss'
})
export class UserlogComponent {

  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    type: new FormControl('Seller')
  })

  accountTypes = [
    {
      value: "Seller", lable: "Seller"
    },
    {
      value: "User", lable: "User"
    }
  ];

  message: string = "";

  constructor(private loginService: LoginService, private router: Router) { }
  jsonData: any;
  onSubmit(): void {

    if (this.login.value.type == "Seller") {
      this.jsonData = this.loginService.loginUser("seller/login", this.login.value).subscribe(
        {
          next: (data: any) => {
           
            this.jsonData = data;
            localStorage.setItem("token", this.jsonData.data);
            this.router.navigate(['/'])
          },
          error: (err: any) => {
            this.message = err.message.includes('404')
              ? `Error: ${err.status}. User Exists! Please proceed to login`
              : "An unexpected error occurred. Please try again.";
          }
        }
      );
    }
    else if (this.login.value.type == "User") {
      this.jsonData = this.loginService.loginUser("user/signin", this.login.value).subscribe(
        {
          next: (data: any) => {
            this.jsonData = data;
            localStorage.setItem("token", this.jsonData.data);
            this.router.navigate(['/store'])
          },
          error: (err: any) => {

            this.message = err.message.includes('404')
              ? `Error: ${err.status}. User Exists! Please proceed to login`
              : "An unexpected error occurred. Please try again.";
          }
        }
      );
    }
  }
}
