import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  data = [
    {
      id: 1,
      title: 'News 1',
      description: 'Title description'
    },
    {
      id: 2,
      title: 'News 2',
      description: 'Title description'
    },
    {
      id: 3,
      title: 'News 3',
      description: 'Title description'
    },
    {
      id: 4,
      title: 'News 4',
      description: 'Title description'
    }
  ];
}
