import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // הוספה חשובה

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,         //  בשביל *ngIf
    ReactiveFormsModule,   //  בשביל formGroup
    RouterModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
