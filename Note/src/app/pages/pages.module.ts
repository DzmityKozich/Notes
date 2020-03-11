import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';
import { MatSliderModule } from '@angular/material/slider';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Error404Component } from './error404/error404.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    HomeComponent,
    SignUpComponent,
    Error404Component,
    SignInComponent],
  imports: [
    CommonModule,
    NavbarModule,
    FormsModule,
    ShareModule,
    ReactiveFormsModule,
    AutosizeModule,
    MatSliderModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    HomeComponent,
    SignUpComponent,
    Error404Component
  ]
})
export class PagesModule { }
