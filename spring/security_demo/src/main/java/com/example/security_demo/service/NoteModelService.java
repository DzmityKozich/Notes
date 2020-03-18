package com.example.security_demo.service;

import com.example.security_demo.models.NoteModel;

import java.util.List;

public interface NoteModelService {
    List<NoteModel> getAllNotes();
    NoteModel getNoteById(Long id);
    NoteModel saveNote(NoteModel note);
    NoteModel changeColor(Long id, String color);
    void deleteNoteById(Long id);
    List<NoteModel> getAllNotesByIdUser(Long id);
}
