package com.example.security_demo.controller;

import com.example.security_demo.models.NoteModel;
import com.example.security_demo.service.NoteModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
public class NoteModelController {

    @Autowired
    private NoteModelService noteModelService;

    @GetMapping("")
    private List<NoteModel> getAllNotes(){
        return noteModelService.getAllNotes();
    }

    @GetMapping("/user/{id}")
    private List<NoteModel> getAllNotesByIdUser(@PathVariable Long id){
        return noteModelService.getAllNotesByIdUser(id);
    }

    @PostMapping("")
    private NoteModel saveNote(@RequestBody NoteModel note){
        return noteModelService.saveNote(note);
    }

    @DeleteMapping("/{id}")
    private void deleteNote(@PathVariable Long id){
        noteModelService.deleteNoteById(id);
    }
}
