import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private path = '/api/users';

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.path);
  }

  public saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.path, user);
  }

  public deleteUser(user: User): Observable<void> {
    return this.http.delete<void>(this.path + '/' + user.idUser);
  }
}
