package com.example.security_demo.controller;

import com.example.security_demo.models.NoteModel;
import com.example.security_demo.service.NoteModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Role;
import org.springframework.security.access.prepost.PreAuthorize;
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

    @GetMapping("/user/{email}")
    private List<NoteModel> getAllNotesByUserId(@PathVariable String email){
        return noteModelService.getAllNotesByUserEmail(email);
    }

    @PostMapping("")
    private NoteModel saveNote(NoteModel note){
        return noteModelService.saveNote(note);
    }

    @DeleteMapping("/{id}")
    private void deleteNote(@PathVariable Long id){
        noteModelService.deleteNoteById(id);
    }
}
