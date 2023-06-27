import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(private productService:ProductsService,private router:Router) { }
  product:any;
  ngOnInit() {
    this.product = this.productService.selectedProduct;
  }

  updateProduct(){
    console.log(this.product.date_added);
    this.productService.updateProduct(this.product);
    
  }
}
