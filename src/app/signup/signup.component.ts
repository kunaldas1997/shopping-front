import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SignupService } from './signup.service';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink,  NgFor],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {


  constructor(private signupService: SignupService, private router: Router) { }

  jsonData: any;
  message: string = "";
  accountTypes = [
    {
      value: "Seller", lable: "Seller"
    },
    {
      value: "User", lable: "User"
    }
  ];
  selectedAccountType: string = "";
  onSubmit(): void {
    if (this.signup.value.type == "Seller") {
      this.signupService.signupUser("seller/signup", this.signup.value).subscribe({
        next: (data: any) => {
          this.jsonData = data;
          console.log(this.jsonData);
          localStorage.setItem("token", this.jsonData.data)
          this.router.navigate(['/store']);
        },
        error: (err: any) => {

          this.message = err.message.includes('400')
            ? `Error: ${err.status}. Seller Exists! Please proceed to login`
            : "An unexpected error occurred. Please try again.";
        }
      });
    }

    else if (this.signup.value.type == "User") {
      this.signupService.signupUser("user/signup", this.signup.value).subscribe({
        next: (data: any) => {
          this.jsonData = data;
          console.log(this.jsonData);
          localStorage.setItem("token", this.jsonData.data)
          this.router.navigate(['/login']);
        },
        error: (err: any) => {

          this.message = err.message.includes('400')
            ? `Error: ${err.status}. User Exists! Please proceed to login`
            : "An unexpected error occurred. Please try again.";
        }
      });
    }

  }
  signup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    type: new FormControl('Seller'),
    user_name: new FormControl('')
  })


}
