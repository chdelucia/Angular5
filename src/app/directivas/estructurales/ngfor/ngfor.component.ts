import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.less']
})
export class NgforComponent implements OnInit {
  simple: string[] = ['Crhis', 'David', 'Jose'];
  personas;
  constructor() { }

  ngOnInit() {
    this.personas = [
      {
        nombre: 'Christian',
        edad: '30',
        roles: [
          {
            preferible: 'FrontEnd',
            actual: 'BackEnd'
          }
        ]
      },
      {
        nombre: 'Jose',
        roles: []
      },
      {
        nombre: 'David',
        edad: '130'
      },
    ];
  }

}
