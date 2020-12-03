import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiKey = '0511a71f-c4b2-4aa1-9191-299d8223dc8f';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      apiKey: this.apiKey,
      'Access-Control-Allow-Origin': '*',
    }),
  };
  todos: Todo[] = [];
  constructor(private http: HttpClient) {}

  private todosUrl = 'http://exceed-todo-list.herokuapp.com/api/v1';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}/todos`, this.httpOptions).pipe(
      tap((_) => console.log('fetched Todos')),
      catchError(this.handleError<Todo[]>([]))
    );
  }

  addTodo(title): Observable<Todo> {
    return this.http
      .post<Todo>(`${this.todosUrl}/todos`, { title }, this.httpOptions)
      .pipe(
        tap((_) => console.log('Added Todo')),
        catchError(this.handleError<Todo>())
      );
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http
      .delete<Todo>(`${this.todosUrl}/todos/${id}`, this.httpOptions)
      .pipe(
        tap((_) => console.log('Deleted Todo')),
        catchError(this.handleError<Todo>())
      )
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
