package com.example.security_demo.service;

import com.example.security_demo.models.NoteModel;

import java.util.List;

public interface NoteModelService {
    List<NoteModel> getAllNotes();
    NoteModel saveNote(NoteModel note);
    void deleteNoteById(Long id);
    List<NoteModel> getAllNotesByUserEmail(String email);
}
