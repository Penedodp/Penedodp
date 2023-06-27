import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  products: any = [];
  productDetail: any;
  pagedProducts: any[] = [];
  totalProducts: number = 0;
  pageSize: number = 5;
  
  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  viewProductDetail(product: any) {
    this.productDetail = product;
    this.productsService.selectedProduct=this.productDetail;
    this.router.navigate(['product',this.productDetail.id]);
  }
  goToNew(){
    this.router.navigate(['/new-product']);
  }
  goToEdit(product:any){
    this.productDetail=product;
    this.productsService.selectedProduct = this.productDetail;
    this.router.navigate(['/edit-product',this.productDetail.id])
  }
  goToDelete(product:any){
    this.router.navigate(['/delete-product']);
  }
  goToAddCard(){
    this.router.navigate(['/credit-card']);
  }

  getPaginatedProducts(page: number, pageSize: number): void {
    const startIndex = page * pageSize;
    const endIndex = startIndex + pageSize;
    this.pagedProducts = this.products.slice(startIndex, endIndex);
  }
  onPageChange(event: PageEvent): void {
    const { pageIndex, pageSize } = event;
    this.getPaginatedProducts(pageIndex, pageSize);
  }
}
