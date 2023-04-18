import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../interfaces/product";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements  OnInit{
  data: IProduct[] = [];
  newProduct: IProduct = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    thumbnail: 'https://i.dummyjson.com/data/products/1/4.jpg',
    date: null
  };
  searchText: string = '';

  constructor(private http: HttpClient) {
    /// action
    http.get('https://dummyjson.com/products')
      .subscribe((data: any) => {
        data.products.forEach((item: any) => {
          item['date'] = 1681728987;
        })
        this.data = data.products as IProduct[];
        console.log(this.data);
      })
    console.log(this.data);
    // action
  }

  async ngOnInit() {
    //action
    const data = await firstValueFrom(this.http.get('https://dummyjson.com/products'));
    console.log(data);
  }

  save() {
    this.data = [this.newProduct, ...this.data];
  }

  changeValue(event: any) {

  }
}
