import { CurrentUser } from './../../classes/current-user';
import { StorageService } from './../../services/storage.service';
import { NoteService } from './../../services/note.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
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
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { HostListener } from '@angular/core';

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
export class HomeComponent implements OnInit, OnDestroy, CanComponentDeactivate {

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

  @HostListener('window:beforeunload'/*, ['$event']*/)
  beforeUnloadHander() {
      return this.canDeactivate();
  }

  public getAllNotesByIdUser(): void {
    if (this.isAuthorized) {
      this.subscription.push(this.noteService.getNotesByIdUser(this.currentUser.idUser)
        .subscribe(arg => this.notes = arg)
      );
    }
  }

  public getNoteById(note: Note): void {
    this.subscription.push(this.noteService.getNoteById(note.idNote)
      .subscribe(arg => {
        this.notes.splice(this.notes.indexOf(note), 1, arg);
      })
    );
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

  public changeColor(note: Note, color: string): void {
    this.subscription.push(this.noteService.changeColor(note.idNote, color)
      .subscribe(() => this.getNoteById(note))
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

  public editNote(note: Note): void {
    this.subscription.push(this.noteService.saveNote(note)
      .subscribe(() => {
        this.getNoteById(note);
        this.openSnackBar('Edits saved!', '', 1000);
      })
    );
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.notes.some(item => item.isEdit === true)) {
      return window.confirm('Do you want to leave this page?');
    } else {
      return true;
    }
  }

  public openSnackBar(message: string, action: string, time: number) {
    this.snackBar.open(message, action, { duration: time });
  }

  public color1(note: Note): void {
    this.changeColor(note, '#ffe555');
  }

  public color2(note: Note): void {
    this.changeColor(note, '#fff');
  }

  public color3(note: Note): void {
    this.changeColor(note, 'rgb(89, 244, 255)');
  }

  public color4(note: Note): void {
    this.changeColor(note, 'rgba(255, 94, 215, 0.808)');
  }

  public color5(note: Note): void {
    this.changeColor(note, 'rgb(112, 255, 112)');
  }

  public color6(note: Note): void {
    this.changeColor(note, 'rgb(151, 149, 247)');
  }

  ngOnDestroy(): void {
    this.canDeactivate();
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

}
