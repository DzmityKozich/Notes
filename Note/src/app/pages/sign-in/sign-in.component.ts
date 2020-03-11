import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpComponent } from 'src/app/pages/sign-up/sign-up.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9]{6,45}')])
  });

  constructor(private dialog: MatDialogRef<SignUpComponent>) { }

  public onSubmit(x): void {
    console.log(x);
  }

  public close(): void {
    this.dialog.close();
  }

}
