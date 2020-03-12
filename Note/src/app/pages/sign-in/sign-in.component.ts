import { MatSnackBar } from '@angular/material/snack-bar';
import { StorageService } from './../../services/storage.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { SignInService } from './../../services/sign-in.service';
import { Token } from './../../classes/token';
import { LoginUser } from './../../classes/loginUser';
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

  public hide = true;
  public loginUser: LoginUser = new LoginUser();
  public token: Token = new Token();
  private subscription: Subscription[] = [];

  signInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9]{6,45}')])
  });

  constructor(private dialog: MatDialogRef<SignUpComponent>,
              private signInService: SignInService,
              private storage: StorageService,
              private snackBar: MatSnackBar) { }

  public generateToken(loginUser: LoginUser): void {
    this.subscription.push(this.signInService.login(loginUser)
      .subscribe(
        arg => {
          this.token = arg;
          this.storage.setToken(this.token);
        },
        (err) => {
          if (err.status === '403') {
            this.openSnackBar('Check your email and password!', 'Ok', 2500);
          }
        },
        () => {
          this.openSnackBar('Complited successfully!', 'Ok', 2000);
          this.close();
        }
      )
    );
  }

  public onSubmit(value: any): void {
    if (this.signInForm.valid) {
      this.loginUser = value;
      // console.log(this.loginUser);
      this.generateToken(this.loginUser);
    }
  }

  public toggle(): void {
    this.hide = !this.hide;
  }

  public close(): void {
    this.dialog.close();
  }

  public openSnackBar(message: string, action: string, time: number): void {
    this.snackBar.open(message, action, { duration: time });
  }

}
