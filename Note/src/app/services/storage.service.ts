import { Token } from './../classes/token';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly TOKEN = 'token';
  private readonly CURRENT_USER_EMAIL = 'current_user_emil';

  constructor() { }

  public setToken(token: Token): void {
    localStorage.setItem(this.TOKEN, token.token);
    localStorage.setItem(this.CURRENT_USER_EMAIL, token.email);
  }

  // public setCurrentUserEmail(token: Token): void {
  //   localStorage.setItem(this.CURRENT_USER_EMAIL, token.email);
  // }

  public getCurrentUserEmail(): string {
    return localStorage.getItem(this.CURRENT_USER_EMAIL);
  }

  public getToken(): string {
    return localStorage.getItem(this.TOKEN);
  }

  public clearToken(): void {
    localStorage.removeItem(this.TOKEN);
    localStorage.removeItem(this.CURRENT_USER_EMAIL);
  }

}
