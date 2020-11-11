import { ToDoItem } from './../app.todoitem ';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: `root`,
})

export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<ToDoItem[]> {
      return this.httpClient.get<ToDoItem[]>(`https://localhost:5001/api/ToDoItem`);
  }

  getUser(id: string): Observable<ToDoItem> {
    return this.httpClient.get<ToDoItem>(`https://localhost:5001/api/ToDoItem/${id}`)
      .pipe(catchError(this.handleError<ToDoItem>('getUsers id=${id}')));
  }

  addUser(item: ToDoItem): Observable<ToDoItem> {
    return this.httpClient.post<ToDoItem>(`https://localhost:5001/api/ToDoItem`, item)
      .pipe(catchError(this.handleError<ToDoItem>('add item')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

 }
