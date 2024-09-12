import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SignupService } from './signup.service';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {


  constructor(private signupService: SignupService, private router: Router) { }

  jsonData: any;
  message: string = "";
  onSubmit(): void {

    this.signupService.signupUser("user/signup", this.signup.value).subscribe({
      next: (data: any) => {
        this.jsonData = data;
        this.router.navigate(['/store']);
      },
      error: (err: any) => {

        this.message = err.message.includes('400')
          ? `Error: ${err.status}. User Exists! Please proceed to login`
          : "An unexpected error occurred. Please try again.";
      }
    }
    );

  }

  signup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })


}
