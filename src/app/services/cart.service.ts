import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    // Load cart from localStorage if it exists
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      this.cartSubject.next(this.cartItems);
    }
  }

  getCart(): Observable<CartItem[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }

    this.updateCart();
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.updateCart();
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        this.updateCart();
      }
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
  }

  private updateCart(): void {
    this.cartSubject.next(this.cartItems);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getItemCount(): number {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }
} 