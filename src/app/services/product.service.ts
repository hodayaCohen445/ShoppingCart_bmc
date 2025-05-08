import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Gray Cap',
      description: 'Stylish gray and black cap',
      price: 30.00,
      imageUrl: 'images/products/cap.png'
    },
    {
      id: 2,
      name: 'Black T-Shirt',
      description: 'Classic black t-shirt',
      price: 80.00,
      imageUrl: 'images/products/black-tshirt.jpg'
    },
    {
      id: 3,
      name: 'Teal Cap',
      description: 'Modern teal cap',
      price: 20.00,
      imageUrl: 'images/products/teal-cap.png'
    },
    {
      id: 4,
      name: 'Pink T-Shirt',
      description: 'Comfortable pink t-shirt',
      price: 40.00,
      imageUrl: 'images/products/pink-tshirt.png'
    },
    {
      id: 5,
      name: 'Blue T-Shirt',
      description: 'Casual blue t-shirt',
      price: 40.00,
      imageUrl: 'images/products/blue-tshirt.png'
    },
    {
      id: 6,
      name: 'Brown Boots',
      description: 'Classic brown leather boots',
      price: 100.00,
      imageUrl: 'images/products/boots.png'
    },
    {
      id: 7,
      name: 'Brown Shoes',
      description: 'Elegant brown shoes',
      price: 70.00,
      imageUrl: 'images/products/shoes.png'
    },
    {
      id: 8,
      name: 'Leather Wallet',
      description: 'Premium leather wallet',
      price: 30.00,
      imageUrl: 'images/products/wallet.png'
    },
    {
      id: 9,
      name: 'Ring',
      description: 'Sparkling gold ring',
      price: 50.00,
      imageUrl: 'images/products/ring.png'
    },
    {
      id: 10,
      name: 'Belt',
      description: 'Stronge belt',
      price: 25.00,
      imageUrl: 'images/products/belt.png'
    }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
} 