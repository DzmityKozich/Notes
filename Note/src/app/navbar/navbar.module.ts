import { SignUpComponent } from './../pages/sign-up/sign-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SignInComponent } from '../pages/sign-in/sign-in.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
  ],
  entryComponents: [
    SignInComponent,
    SignUpComponent,
    NavbarComponent
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
