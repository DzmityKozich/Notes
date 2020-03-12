import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { User } from './../../classes/user';
import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  public hide = true;
  public user: User = new User();
  public users: User[] = [];
  private subscribtions: Subscription[] = [];

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9]{1,45}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9]{6,45}')]) // (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}
  });

  constructor(private dialog: MatDialogRef<SignUpComponent>,
              private userService: UserService,
              private snackBar: MatSnackBar) { }

  public refreshUser(): void {
    this.user = new User();
  }

  public saveUser(user: User): void {
    this.subscribtions.push(this.userService.saveUser(user)
      .subscribe(() => {
        this.refreshUser();
        this.close();
      },
        (err) => {
          if (err.status === 400) {
            this.openSnackBar('This user is exist!', 'Ok', 2500);
          }
        },
        () => {
          this.openSnackBar('Compiled successfully', 'Ok', 2000);
        })
    );
  }

  onSubmit(value: any) {
    if (this.form.valid) {
      this.user = value;
      this.user.role = { idRole: 1, name: 'ROLE_USER' };
      this.saveUser(this.user);
      // console.log(this.user);
    } else { this.openSnackBar('Invalid values!', 'Ok', 2500); }
  }

  public close(): void {
    this.dialog.close();
  }

  public toggle(): void {
    this.hide = !this.hide;
  }

  public openSnackBar(massage: string, action: string, time: number): void {
    this.snackBar.open(massage, action, { duration: time });
  }
}
