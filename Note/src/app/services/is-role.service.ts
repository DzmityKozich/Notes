import { CurrentUser } from './../classes/current-user';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsRoleService {

  private currentUser: CurrentUser = new CurrentUser();

  constructor(private storage: StorageService) {
    this.currentUser = this.storage.getCurrentUser();
  }

  public isAuthorized(): boolean {
    return this.currentUser !== null;
  }

  public isUser(): boolean {
    if (!this.isAuthorized()) {
      return false;
    }
    return this.currentUser.idRole === 1;
  }

  public isAdmin(): boolean {
    if (!this.isAuthorized()) {
      return false;
    }
    return this.currentUser.idRole === 2;
  }

}
