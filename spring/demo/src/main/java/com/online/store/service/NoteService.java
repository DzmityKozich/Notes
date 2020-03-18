package com.online.store.service;

import com.online.store.entity.Note;

import java.util.List;

public interface NoteService {
    Iterable<Note> getAllNotes();
    Note changeColor(Long id, String color);
    Note saveNote(Note note);
    void deleteNoteById(Long id);
    List<Note> getAllNotesByIdUser(Long id);
}
