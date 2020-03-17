import { CurrentUser } from './../classes/current-user';
import { Token } from './../classes/token';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly TOKEN = 'token';
  private readonly CURRENT_USER = 'currentUser';
  private currentUser: CurrentUser = new CurrentUser();

  constructor() { }

  public setToken(token: Token): void {
    localStorage.setItem(this.TOKEN, token.token);
    this.currentUser = token.currentUser;
    localStorage.setItem(this.CURRENT_USER, JSON.stringify(this.currentUser));
  }

  // public getRole(): number {
  //   return this.getCurrentUser().idRole;
  // }

  public getToken(): string {
    return localStorage.getItem(this.TOKEN);
  }

  public getCurrentUser(): CurrentUser {
    return JSON.parse(localStorage.getItem(this.CURRENT_USER));
  }

  public clearToken(): void {
    localStorage.removeItem(this.TOKEN);
    localStorage.removeItem(this.CURRENT_USER);
  }

}
