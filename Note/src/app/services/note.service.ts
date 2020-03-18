import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../classes/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private path = '/api/notes';

  constructor(private http: HttpClient,
              private storage: StorageService) { }

  public getNotesByIdUser(idUser: number): Observable<Note[]> {
    return this.http.get<Note[]>(this.path + '/user/' + idUser);
  }

  public saveNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.path, note);
  }

  public changeColor(id: number, color: string): Observable<Note> {
    return this.http.post<Note>(this.path + '/color/' + id, color);
  }

  public deleteNote(idNote: number): Observable<void> {
    return this.http.delete<void>(this.path + '/' + idNote);
  }

}
