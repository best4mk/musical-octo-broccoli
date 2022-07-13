import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-rating',
  templateUrl: './product-card-rating.component.html',
  styleUrls: ['./product-card-rating.component.scss']
})
export class ProductCardRatingComponent {
  @Input () public productRating!: number;
  public stars: number[] = [1, 2, 3, 4, 5];
  public isStartLessOrEqualToRating(star: number): boolean { 
    return star <= this.productRating;
  }
}