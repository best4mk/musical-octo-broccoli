import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from '../types';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productCategories$!: Observable<ProductCategory[]>;

  constructor(private readonly productsService: ProductsService) { }

  public ngOnInit(): void {
    this.productCategories$ = this.productsService.getProductCategories();
    
    // initialize get products
  }
}
