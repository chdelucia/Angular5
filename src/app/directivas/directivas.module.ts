import { AtributoComponent } from './atributo/atributo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivasRoutingModule } from './directivas-routing.module';
import { NgifComponent } from './estructurales/ngif/ngif.component';
import { NgforComponent } from './estructurales/ngfor/ngfor.component';
import { NgswitchComponent } from './estructurales/ngswitch/ngswitch.component';
import { EstructuralesComponent } from './estructurales/estructurales.component';
import { DirectivasComponent } from './directivas.component';

@NgModule({
  imports: [
    CommonModule,
    DirectivasRoutingModule,
  ],
  declarations: [
    DirectivasComponent,
    EstructuralesComponent,
    AtributoComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent
  ]
})
export class DirectivasModule { }
