import { Component, Input } from '@angular/core';
import { Product } from 'src/app/types';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent  {
  @Input () public product!: Product;
  public stars: number[] = [1, 2, 3, 4, 5];
}
