import {Component, Input} from '@angular/core';
import {IProduct} from "../../interfaces/product";
import {UtilService} from "../../service/util.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: IProduct;

  constructor(private util: UtilService) {
  }

  method() {
    this.util.uppercase('ees');
  }

}
