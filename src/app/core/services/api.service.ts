import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, retry } from 'rxjs';
import { API_BASE_URL } from '../../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getList(): Observable<any> {
    const url = `${API_BASE_URL}/posts`;

    return this.http.get(url).pipe(
      retry(),
      catchError((err) => {
        console.log('Error: ', err);
        return EMPTY;
      })
    );
  }

  public getPost(id: number): Observable<any> {
    const url = `${API_BASE_URL}/posts/${id}`;

    return this.http.get(url).pipe(
      retry(),
      catchError((err) => {
        console.log('Error: ', err);
        return EMPTY;
      })
    );
  }
}
