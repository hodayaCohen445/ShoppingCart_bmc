import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ApplicationComponent } from './application/application.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'application',
    component: ApplicationComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent },
      { path: 'cart', component: CartComponent }
    ]
  },
  { path: '**', redirectTo: 'register' }
];
