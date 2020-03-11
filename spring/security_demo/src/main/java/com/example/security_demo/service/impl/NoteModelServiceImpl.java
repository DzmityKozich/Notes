package com.example.security_demo.service.impl;

import com.example.security_demo.models.NoteModel;
import com.example.security_demo.service.NoteModelService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class NoteModelServiceImpl implements NoteModelService {

    @Value("${backend.server.url}")
    private String backend;

    @Override
    public List<NoteModel> getAllNotes() {
        RestTemplate restTemplate = new RestTemplate();
        NoteModel[] noteModels = restTemplate.getForObject(backend + "/notes", NoteModel[].class);
        return noteModels == null ? Collections.emptyList() : Arrays.asList(noteModels);
    }

    @Override
    public NoteModel saveNote(NoteModel note) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backend + "/notes", note, NoteModel.class).getBody();
    }

    @Override
    public void deleteNoteById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backend + id);
    }

    @Override
    public List<NoteModel> getAllNotesByUserEmail(String email) {
        RestTemplate restTemplate = new RestTemplate();
        NoteModel[] noteModels = restTemplate.getForObject(backend + "/notes/user/" + email, NoteModel[].class);
        return noteModels == null ? Collections.emptyList() : Arrays.asList(noteModels);
    }
}
