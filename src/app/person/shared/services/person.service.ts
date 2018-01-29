import { LogService } from './../../../core/logs.service';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/finally';

import { User } from './../models/user';
import { Post } from '../models/post';

@Injectable()
export class PersonService {
  userUrl = 'https://jsonplaceholder.typicode.com/users';
  postsUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

  constructor(private http: HttpClient, private logger: LogService) {
    console.log('creo el servicio');
  }

  getUsers(): Observable<User[]> {
    this.createUser();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
    };
    return this.http.get<User[]>(this.userUrl, httpOptions)
      .retry(2)
      .pipe(
      tap(res => console.table(res)),
      catchError(this.handleError<User[]>('getUsers', []))
      )
      .finally(() => this.logger.info(this.constructor.name, 'getUsers', 'llamada exitosa'));
  }

  getPostsByUserId(id: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl + id)
      .retry(2)
      .pipe(
      tap(res => console.table(res)),
      catchError(
        this.handleError<Post[]>('getUsers', [])
      )
      );
  }

  createUser(user?: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
    };
    return this.http.post(this.postsUrl, JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }), httpOptions)
      .pipe(
        tap(res => console.table(res)),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      console.log(result);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
