import { Component, Input } from '@angular/core';
import { Product } from 'src/app/types';

@Component({
  selector: 'app-product-card-rating',
  templateUrl: './product-card-rating.component.html',
  styleUrls: ['./product-card-rating.component.scss']
})
export class ProductCardRatingComponent {
  @Input () public product!: Product;
  public stars: number[] = [1, 2, 3, 4, 5];


}
