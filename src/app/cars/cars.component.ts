import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  name: string;
  edad: number;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log('ha cargado coches');
  }
  closePopup() {
    this.router.navigate([{ outlets: { popup: null }}]);
  }

}
