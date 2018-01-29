import { FormsModule } from '@angular/forms';
import { CarsComponent } from './../cars/cars.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { MultiplicadorPipe } from './pipes/multiplicador.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ CarsComponent, MultiplicadorPipe ],
  exports: [ CommonModule, FormsModule, CarsComponent, MultiplicadorPipe ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedModule,
        providers: []
    };
 }
}
