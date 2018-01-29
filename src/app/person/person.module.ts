import { NgModule } from '@angular/core';

import { PersonService } from './shared/services/person.service';

import { SharedModule } from './../shared/shared.module';
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonInfoComponent } from './person-info/person-info.component';


@NgModule({
  imports: [
    PersonRoutingModule,
    SharedModule.forRoot(),
  ],
  declarations: [
    PersonComponent,
    PersonDetailComponent,
    PersonInfoComponent
  ],
  providers: [ PersonService ]
})
export class PersonModule { }
