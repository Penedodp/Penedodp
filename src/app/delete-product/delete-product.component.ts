import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  fourthFormGroup: FormGroup;
  productos: any[] = [];
  constructor(private productService: ProductsService, private router: Router, private _formBuilder: FormBuilder) { }
  product: any;
  ngOnInit() {
    this.fourthFormGroup = this._formBuilder.group({
      productNameControl: ['', Validators.required],
      //productDateControl: ['', Validators.required],
      //productStateControl: ['', Validators.required],
      productIdControl: ['', Validators.required]
    });
  }
  idAutomatico(): string {
    const productName = this.fourthFormGroup.get('productNameControl').value;
    //const productDate = this.fourthFormGroup.get('productDateControl').value;
    //const productState = this.fourthFormGroup.get('productStateControl').value;

    const mismoProduct = this.productos.find(producto =>
      producto.name === productName //&&
      //producto.date === productDate &&
      //producto.state === productState
    );

    if (mismoProduct ) {
      console.log(mismoProduct.id)
      return mismoProduct.id;
    } else {

      return 'No se encuentra el producto';
    }
  }
  DeleteProduct(product: { id: string; }) {
    this.productService.DeleteProduct(product.id);
    this.router.navigate(['/products']);
  }
  goToTable() {
    this.router.navigate(['/']);
  }
}
