import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { PipesComponent } from './pipes.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [
    PipesComponent
  ]
})
export class PipesModule { }
