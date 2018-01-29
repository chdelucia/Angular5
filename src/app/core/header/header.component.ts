import { Component, OnInit } from '@angular/core';

class MenuItem {
  constructor(caption: string, link: any) { }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[];
  visible = false;
  constructor() { }

  ngOnInit() {
    this.menuItems = [
      { caption: 'Home', link: ['/home'] },
      { caption: 'Persons', link: ['/person'] },
      { caption: 'Directivas', link: ['/directivas'] },
      { caption: 'Login', link: ['/form'] },
      { caption: 'ShadowDom', link: ['/shadowdom'] },
      { caption: 'Pipes', link: ['/pipes'] },
      { caption: 'Admin', link: ['/admin'] },
      { caption: 'Registro', link: { outlets: { popup: ['registro'] } } },
    ];
  }


}
