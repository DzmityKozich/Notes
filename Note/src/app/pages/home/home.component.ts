import { Subscription } from 'rxjs/internal/Subscription';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/classes/note';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.2s')
      ]),
      transition(':leave', [
        animate('.4s', style({ opacity: '0' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  public notes: Note[] = [];
  public note: Note = new Note();
  public isAnimation = false;

  constructor(private snackBar: MatSnackBar) {
  }

  public openSnackBar() {
    this.snackBar.open('Note was deleted!', 'Ok', { duration: 1000 });
  }

  public reareshNote(): void {
    this.note = new Note();
  }

  public saveNote(): void {
    if (this.note.text != null || this.note.title != null) {
      this.notes.push(this.note);
      this.reareshNote();
    }
  }

  public clear(): void {
    this.notes = [];
  }

  public color1(n: Note): void {
    n.color = '#ffe555';
  }

  public color2(n: Note): void {
    n.color = '#fff';
  }

  public color3(n: Note): void {
    n.color = 'rgb(89, 244, 255)';
  }

  public color4(n: Note): void {
    n.color = 'rgba(255, 94, 215, 0.808)';
  }

  public color5(n: Note): void {
    n.color = 'rgb(112, 255, 112)';
  }

  public color6(n: Note): void {
    n.color = 'rgb(151, 149, 247)';
  }

  public delete(n: Note): void {
    const index: number = this.notes.indexOf(n);
    if (index !== -1) {
      this.notes.splice(index, 1);
      this.isAnimation = true;
      this.openSnackBar();
    }
  }

  ngOnInit() {}

}
