import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsRoleService {

  constructor(private storage: StorageService) { }

  public isAuthorized(): boolean {
    return this.storage.getCurrentUserEmail() !== null;
  }

  public isUser(): boolean {
    if (!this.isAuthorized()) {
      return false;
    }
    return this.storage.getRole() === '1';
  }

  public isAdmin(): boolean {
    if (!this.isAuthorized()) {
      return false;
    }
    return this.storage.getRole() === '2';
  }

}
