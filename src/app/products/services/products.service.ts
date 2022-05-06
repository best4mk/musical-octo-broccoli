import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductCategory } from 'src/app/types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl: string = 'api/products';

  constructor(private readonly httpClient: HttpClient) { }

  public getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<ProductCategory[]>(`${this.baseUrl}/categories`).pipe(map((response) => response));
  }

  // Response example here: http://localhost:4200/api/products
  // Create Product Interface,use  ProductCategory as reference
  // public getProducts(): Observable<Product[]> {
    // to implement 
  // }
}
