import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.less']
})
export class NgifComponent implements OnInit {
  active: boolean;
  constructor() { }

  ngOnInit() {
  }

}
