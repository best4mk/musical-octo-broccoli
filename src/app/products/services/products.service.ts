import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product, ProductCategory } from 'src/app/types';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  [x: string]: any;
  private baseUrl: string = 'api/products';
 
  
  constructor(private readonly httpClient: HttpClient) { }

  public getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<ProductCategory[]>(`${this.baseUrl}/categories`).pipe(map((response) => response));
  }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}`).pipe(map((response) => response))
   }
}


  // Response example here: http://localhost:4200/api/products
  // Create Product Interface,use  ProductCategory as reference
//export class ProductInterface{
  //private baseUrl: string = 'api/products';
  
  //constructor (private readonly httpClient: HttpClient) { }

 // public getProductInterface(): Observable<ProductInterface[]>{
  //  return this.httpClient.get<ProductInterface[]>('${this.baseUrl}/products').pipe(map((response) => response));
 // }
//}
  

  