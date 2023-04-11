import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  title = 'Test Page';
  show = false;

  constructor() {
    this.title = 'Test Changed';
  }

  changeTitle() {
    this.title = 'INNLAB';
    this.show = !this.show;
  }

}
