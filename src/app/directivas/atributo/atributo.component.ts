import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributo',
  templateUrl: './atributo.component.html',
  styleUrls: ['./atributo.component.less']
})
export class AtributoComponent implements OnInit {
  isSpecial = true;
  constructor() { }

  ngOnInit() {
  }

}
