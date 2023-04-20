import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from "./test/test.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
    title: 'Test page'
  },
  {
    path: 'main',
    component: MainPageComponent,
    title: 'Main Page'
  },
  {
    path: 'create-product',
    component: ProductEditComponent,
    title: 'New Product'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
