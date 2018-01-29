import { AtributoComponent } from './atributo/atributo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectivasComponent } from './directivas.component';

import { EstructuralesComponent } from './estructurales/estructurales.component';
import { NgifComponent } from './estructurales/ngif/ngif.component';
import { NgforComponent } from './estructurales/ngfor/ngfor.component';
import { NgswitchComponent } from './estructurales/ngswitch/ngswitch.component';

const routes: Routes = [
  {
    path: '', 
    component: DirectivasComponent,
    children: [
      {
        path: '',
        redirectTo: 'estructurales',
        pathMatch: 'full'
      },
      {
        path: 'estructurales',
        component: EstructuralesComponent,
        children: [
          {
            path: '',
            redirectTo: 'ngif',
            pathMatch: 'full'
          },
          {
            path: 'ngif',
            component: NgifComponent,
          },
          {
            path: 'ngfor',
            component: NgforComponent,
          },
          {
            path: 'ngswitch',
            component: NgswitchComponent,
          }
        ]
      },
      {
        path: 'atributo',
        component: AtributoComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivasRoutingModule { }
