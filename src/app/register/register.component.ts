import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    registerForm: FormGroup;
    userExists: boolean = false;

    constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/(?=.*[A-Z])/)
      ]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }
  
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return password === confirm ? null : { passwordsMismatch: true };
  }

    onSubmit() {
      if (this.registerForm.valid) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const emailExists = users.some((user: any) => user.email === this.registerForm.value.email);
        
        if (emailExists) {
          this.userExists = true;
        } else {
          this.userExists = false;
          users.push(this.registerForm.value);
          localStorage.setItem('users', JSON.stringify(users));
          alert('Registration successful!');
        }
      }
    }
    

}
