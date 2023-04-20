import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

const minStrLength = (min: number) => {
  return (c: AbstractControl): {[key: string]: any} | null => {
    if (c.value.length >= min) {
      return null;
    }
    return {MINLENGTH: true}
  }
}

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  productForm = new FormGroup({
    title: new FormControl('', [Validators.required, minStrLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(2)]),
    price: new FormControl(''),
    date: new FormControl(''),
  });

  constructor() {
    this.productForm.valueChanges.subscribe(value => {
      console.log(value);
    })
    this.productForm.controls.title.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  save() {
    console.log(this.productForm);
    console.log(this.productForm.value);
    if (this.productForm.valid) {

    } else {

    }
  }


}
