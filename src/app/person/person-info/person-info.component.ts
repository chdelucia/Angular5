import { Component, EventEmitter, Input, Output, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.less']
})
export class PersonInfoComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() user: User;
  @Output() changed = new EventEmitter<User>();
  constructor() { }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit for ${this.user.name}`);
  }

  ngOnChanges() {
    console.log(`ngOnChanges for ${this.user.name}`);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy for ${this.user.name}`);
  }

  ngOnInit() {
    console.log(`ngOnInit for ${this.user.name}`);
  }
  close() {
    this.changed.emit(null);
  }

}
