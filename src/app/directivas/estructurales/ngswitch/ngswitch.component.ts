import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.less']
})
export class NgswitchComponent implements OnInit {
  people: any[];
  constructor() { }

  ngOnInit() {
    this.people = [
      {
        'name': 'Douglas  Pace',
        'age': 35,
        'country': 'MARS'
      },
      {
        'name': 'Mcleod  Mueller',
        'age': 32,
        'country': 'USA'
      },
      {
        'name': 'Day  Meyers',
        'age': 21,
        'country': 'HK'
      },
      {
        'name': 'Aguirre  Ellis',
        'age': 34,
        'country': 'UK'
      },
      {
        'name': 'Cook  Tyson',
        'age': 32,
        'country': 'USA'
      }
    ];
  }

}
