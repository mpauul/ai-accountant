import { Component, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {CommonModule, CurrencyPipe} from "@angular/common";
import {toSignal} from "@angular/core/rxjs-interop";
import { DocsLoadPanelComponent } from './components/docs-load-panel/docs-load-panel.component';
import { TransactionsPanelComponent } from './components/transactions-panel/transactions-panel.component';


export type Product = { 
  id: string; 
  title: string; 
  description: string; 
  price: string; 
  image: string; 
};

// Angular 17+ automatically treats components as standalone if they use imports 
@Component({
  selector: 'app-dashboard',
  imports: [CurrencyPipe, CommonModule,

    TransactionsPanelComponent,
    DocsLoadPanelComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
  http = inject(HttpClient);
  products: Product[] = [];
  constructor() {

    this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe((products) => {
      this.products = products;
    });
  }
}
