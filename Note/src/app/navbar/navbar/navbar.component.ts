import { IsRoleService } from './../../services/is-role.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StorageService } from './../../services/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { SignUpComponent } from 'src/app/pages/sign-up/sign-up.component';
import { SignInComponent } from 'src/app/pages/sign-in/sign-in.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isAuthorized: boolean;

  constructor(public matDialog: MatDialog,
              private storage: StorageService,
              private snackBar: MatSnackBar,
              private isRole: IsRoleService) { }

  ngOnInit(): void {
    this.isAuthorized = this.isRole.isAuthorized();
  }

  public openSignUpDialog(): void {
    this.matDialog.open(SignUpComponent, {
      width: '500px',
      height: '407px'
    });
  }

  public openSignInDialog(): void {
    this.matDialog.open(SignInComponent, {
      width: '500px',
      height: '330px'
    });
  }

  public logout(): void {
    this.storage.clearToken();
    this.openSnackBar('Complited successfully!', 'Ok', 1500);
    window.location.reload();
  }

  public openSnackBar(message: string, action: string, time: number): void {
    this.snackBar.open(message, action, { duration: time });
  }

}
