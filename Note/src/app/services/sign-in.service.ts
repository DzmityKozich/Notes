import { Token } from './../classes/token';
import { LoginUser } from '../classes/loginUser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private path = '/api/login';

  constructor(private http: HttpClient) { }

  public login(loginUser: LoginUser): Observable<Token> {
    return this.http.post<Token>(this.path, loginUser);
  }
}
