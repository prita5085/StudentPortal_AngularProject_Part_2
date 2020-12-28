import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/students';

  constructor(private http: HttpClient) { }

  loginAdmin(user: User):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/loginAdmin`, user)
  }

  loginStudent(user: User):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/loginStudent`, user)
  }

  addUser(user: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`, user)
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text'});
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  updateUser(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

}
