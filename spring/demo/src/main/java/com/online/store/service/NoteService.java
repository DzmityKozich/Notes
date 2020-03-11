package com.online.store.service;

import com.online.store.entity.Note;
import com.online.store.entity.User;

import java.util.List;

public interface NoteService {
    Iterable<Note> getAllNotes();
    Note saveNote(Note note);
    void deleteNoteById(Long id);
    List<Note> getAllNotesByUserEmail(String email);
}
