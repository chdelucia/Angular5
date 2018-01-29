import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';
import { PersonService } from '../shared/services/person.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Post } from '../shared/models/post';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.less']
})
export class PersonDetailComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();
  posts: Post[];
  constructor(
    private person: PersonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.person.getPostsByUserId(id)
    .takeUntil(this.unsubscribe)
    .subscribe(
      data => {
        this.posts = data;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, body was: ${err.message}`);
        }
      }
    );

  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
