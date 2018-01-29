import { PersonService } from './shared/services/person.service';
import { User } from './shared/models/user';

import { Component, OnInit, OnDestroy, ViewEncapsulation, OnChanges } from '@angular/core';
import 'rxjs/add/operator/retry';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'Rxjs';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { AfterContentChecked, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.less'],
  encapsulation: ViewEncapsulation.None
})

export class PersonComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  private unsubscribe: Subject<void> = new Subject();
  persons: Observable<User[]>;
  persons2: User[];
  selectedPerson: User;
  timerSubscription: Subscription;

  constructor(private person: PersonService) { }


  ngOnInit() {
    this.persons = this.person.getUsers();
  }

  getUsers() {
    this.person.getUsers()
      .takeUntil(this.unsubscribe)
      .subscribe(
      data => {
        this.persons2 = data;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, body was: ${err.message}`);
        }
      });
  }
  selectPerson(person: User) {
    this.selectedPerson = person;
  }
  changed(changedPerson: any) {
    console.log(changedPerson);
    this.selectedPerson = changedPerson;
  }

  ngAfterViewInit() {
    Observable.interval(9 * 1000)
      .takeUntil(this.unsubscribe)
      .subscribe(x => {
        this.getUsers();
      });
  }
  ngOnChanges() {
    console.log('cambia la lista');
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
