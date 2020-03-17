package com.online.store.controller;

import com.online.store.entity.Note;
import com.online.store.service.impl.NoteServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notes")
public class NoteController {
    @Autowired
    private NoteServiceImpl noteService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    private Iterable<Note> getAllNotes(){
        return noteService.getAllNotes();
    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    private List<Note> getAllNotesByUserId(@PathVariable Long id){
        return noteService.getAllNotesByIdUser(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    private Note saveNote(@RequestBody Note note){
        return noteService.saveNote(note);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    private void deleteNote(@PathVariable Long id){
        noteService.deleteNoteById(id);
    }
}
