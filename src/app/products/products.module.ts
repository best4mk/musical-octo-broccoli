import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsService } from './services/products.service';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCardRatingComponent } from './product-card-rating/product-card-rating.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCategoriesComponent,
    ProductCardComponent,
    ProductCardRatingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    ProductsService,
  ]
})
export class ProductsModule { }
