import { CurrentUser } from './../../classes/current-user';
import { StorageService } from './../../services/storage.service';
import { NoteService } from './../../services/note.service';
import { Subscription } from 'rxjs/internal/Subscription';
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
import { IsRoleService } from 'src/app/services/is-role.service';

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
  public currentUser: CurrentUser;
  public isAnimation = false;
  public isAuthorized: boolean;
  private subscription: Subscription[] = [];

  constructor(private snackBar: MatSnackBar,
              private noteService: NoteService,
              private isRoleService: IsRoleService,
              private storage: StorageService) {
  }

  ngOnInit(): void {
    this.isAuthorized = this.isRoleService.isAuthorized();
    this.currentUser = this.storage.getCurrentUser();
    this.getAllNotesByIdUser();
  }

  public getAllNotesByIdUser(): void {
    if (this.isAuthorized) {
      this.subscription.push(this.noteService.getNotesByIdUser(this.currentUser.idUser)
        .subscribe(arg => this.notes = arg)
      );
    }
  }

  public refreshNote(): void {
    this.note = new Note();
  }

  public saveNote(): void {
    if (this.note.text != null || this.note.title != null) {
      this.note.user = this.currentUser;
      this.subscription.push(this.noteService.saveNote(this.note)
        .subscribe(
          () => {
            this.getAllNotesByIdUser();
            this.refreshNote();
          },
          (err) => this.openSnackBar('Please Sign in!', 'Ok', 3000),
          () => this.openSnackBar('Note save!', 'Ok', 1500)
        )
      );
    }
  }

  public changeColor(id: number, color: string): void {
    this.subscription.push(this.noteService.changeColor(id, color)
      .subscribe(() => this.getAllNotesByIdUser())
    );
  }

  public delete(idNote: number): void {
    this.subscription.push(this.noteService.deleteNote(idNote)
      .subscribe(
        () => this.getAllNotesByIdUser(),
        (err) => console.log(err),
        () => this.openSnackBar('Note delete', '', 1500)
      )
    );
  }

  public openSnackBar(message: string, action: string, time: number) {
    this.snackBar.open(message, action, { duration: time });
  }

  public color1(id: number): void {
    this.changeColor(id, '#ffe555');
  }

  public color2(id: number): void {
    this.changeColor(id, '#fff');
  }

  public color3(id: number): void {
    this.changeColor(id, 'rgb(89, 244, 255)');
  }

  public color4(id: number): void {
    this.changeColor(id, 'rgba(255, 94, 215, 0.808)');
  }

  public color5(id: number): void {
    this.changeColor(id, 'rgb(112, 255, 112)');
  }

  public color6(id: number): void {
    this.changeColor(id, 'rgb(151, 149, 247)');
  }

}
