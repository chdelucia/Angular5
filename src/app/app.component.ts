import { Component, OnInit, ViewChild, } from '@angular/core';
import { FooterComponent } from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  @ViewChild('footer') footer: FooterComponent;
  title = 'app';

constructor() {}

ngOnInit() {
  varTest();
  letTest();


  function varTest() {
    var x = 31;
    if (true) {
      var x = 71;  // ¡misma variable!
      console.log(x);  // 71
    }
    console.log(x);  // 71
  }

  function letTest() {
    let x = 31;
    if (true) {
      let x = 71;  // variable diferente
      console.log(x);  // 71
    }
    console.log(x);  // 31
  }

  function prev(number){
    console.log(number);
    //console.log(this.title);
  }

  const prev2 = number => {
    console.log(number);
    console.log(this.title);
  };
  prev2(2);
  prev(8);
}

showFooter(){
  this.footer.onClick();
}

}
