import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  constructor(private router: Router) {}

  goToProduct() {
    this.router.navigate(['application/products']);
  }

  goToCart() {
    this.router.navigate(['application/cart']);
  }
}
