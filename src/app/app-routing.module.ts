import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { CreditCardComponent } from './credit-card/credit-card.component';


const routes: Routes = [
  { path: '', component: ProductsTableComponent },
  { path: 'products', component: ProductsTableComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'new-product', component: NewProductComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'delete-product', component: DeleteProductComponent },
  {path: 'credit-card',component:CreditCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
