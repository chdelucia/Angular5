import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructurales',
  templateUrl: './estructurales.component.html',
  styleUrls: ['./estructurales.component.less']
})
export class EstructuralesComponent implements OnInit {
  menuItems: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = [
      { caption: 'ngIf', link: ['ngif'] },
      { caption: 'ngFor', link: ['ngfor'] },
      { caption: 'ngSwitch', link: ['ngswitch'] },
    ];
  }

}
