import { Component, Input } from '@angular/core';
import { ProductCategory } from 'src/app/types';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent {
  @Input() public categories!: ProductCategory[] | null;
}
