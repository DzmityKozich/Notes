import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { SignUpComponent } from 'src/app/pages/sign-up/sign-up.component';
import { SignInComponent } from 'src/app/pages/sign-in/sign-in.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public matDialog: MatDialog) { }

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

}
