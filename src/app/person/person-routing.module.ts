import { PersonInfoComponent } from './person-info/person-info.component';
import { PersonComponent } from './person.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonDetailComponent } from './person-detail/person-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PersonComponent
  },
  {
    path: ':id',
    component: PersonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }