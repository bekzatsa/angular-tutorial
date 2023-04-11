import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from "./test/test.component";
import {MainPageComponent} from "./main-page/main-page.component";

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
