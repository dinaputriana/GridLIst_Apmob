import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.page.html',
  styleUrls: ['./grid-list.page.scss'],
})
export class GridListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public toastButton = [
    {
      text: "Dismiss",
      role: "cancel",
      handler: () => {
        console.log("dismiss click");
      }
    }
  ]
}
