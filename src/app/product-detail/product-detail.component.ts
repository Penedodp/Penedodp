import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product:any;
  constructor(private productService:ProductsService, private router:Router) { }
 
  ngOnInit() {
    this.product = this.productService.selectedProduct;
  }

  
}
