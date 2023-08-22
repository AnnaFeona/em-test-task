import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, retry } from 'rxjs';
import { API_BASE_URL } from '../../shared/constants';
import { Post, User } from '../../posts/model/posts.intefaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getList(): Observable<Post[]> {
    const url = `${API_BASE_URL}/posts`;

    return this.http
      .get<Post[]>(url)
      .pipe(retry(2), catchError(this.handleError));
  }

  public getPost(id: number): Observable<Post> {
    const url = `${API_BASE_URL}/posts/${id}`;

    return this.http
      .get<Post>(url)
      .pipe(retry(2), catchError(this.handleError));
  }

  public getUser(userId: number): Observable<User> {
    const url = `${API_BASE_URL}/users/${userId}`;

    return this.http
      .get<User>(url)
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    // throw new Error(err.message, { cause: err.status });
    console.log('Error:', err.status);
    return EMPTY;
  }
}
