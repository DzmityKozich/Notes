package com.online.store.service.impl;

import com.online.store.entity.Note;
import com.online.store.entity.User;
import com.online.store.repository.NoteRepository;
import com.online.store.repository.UserRepository;
import com.online.store.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteServiceImpl implements NoteService {

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Iterable<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    @Override
    public Note saveNote(Note note) {
        return noteRepository.save(note);
    }

    @Override
    public void deleteNoteById(Long id) {
        noteRepository.deleteById(id);
    }

    @Override
    public List<Note> getAllNotesByUserEmail(String email) {
        return noteRepository.findAllByUser(userRepository.findByEmail(email));
    }
}
