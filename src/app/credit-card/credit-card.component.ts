import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  creditForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router, private productService:ProductsService) { }

  ngOnInit() {
    this.creditForm = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      cardName: ['', Validators.required],
      cardDate: ['', Validators.required],
      cvv: ['', Validators.required]
    });
  }
  saveCard() {
    if (this.creditForm.invalid) {
      return;
    }

    // aquí con un else guardaría los datos en back teniendo un metodo implementado
    this.creditForm.reset();
  }
}

