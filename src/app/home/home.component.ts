import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  text = 'Hello, world!';
  description = 'Mi primera app con angular 5';
  autor = 'Christian Heredia';
  clicks = 0;
  private atribute: String = 'heya';
  hero = {
    name: 'pepe'
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(event: any): void {
    if (this.clicks > 5) {
      this.router.navigate(['/directivas']);
    } else {
      this.clicks += 1;
      console.log(event);
    }
  }

}
