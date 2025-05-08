import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { CartItem } from '../services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe(items => {
      this.cartItems = items;
      this.total = this.cartService.getTotalPrice();
    });
  }

  updateQuantity(item: CartItem, quantity: number): void {
    this.cartService.updateQuantity(item.id, quantity);
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
