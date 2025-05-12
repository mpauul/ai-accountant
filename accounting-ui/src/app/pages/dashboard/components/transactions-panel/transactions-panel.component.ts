import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';


export type Product = { 
  id: string; 
  title: string; 
  description: string; 
  price: string; 
  image: string; 
};
@Component({
  selector: 'app-transactions-panel',
  imports: [],
  templateUrl: './transactions-panel.component.html',
  styleUrl: './transactions-panel.component.scss'
})
export class TransactionsPanelComponent {
  http = inject(HttpClient);
  products: Product[] = [];
  constructor() {

    this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe((products) => {
      this.products = products;
    });
  }
}
