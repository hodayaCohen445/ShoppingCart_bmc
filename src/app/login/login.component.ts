import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  loginError: boolean = false;

  onLogin() {
    if (this.loginForm.valid) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const found = users.find((u: any) =>
        u.email === this.loginForm.value.email &&
        u.password === this.loginForm.value.password
      );
  
      if (found) {
        localStorage.setItem('loggedIn', 'true');
        this.router.navigate(['/application']);
      } else {
        this.loginError = true;
      }
    }
  }
  

}
