package com.example.security_demo.models;

import com.example.security_demo.dto.CurrentUserDto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class NoteModel {

    private Long idNote;
    private String title;
    private String text;
    private String color;
    private CurrentUserDto user;

    public NoteModel() { }

    public NoteModel(Long idNote, String title, String text, String color, CurrentUserDto user) {
        this.idNote = idNote;
        this.title = title;
        this.text = text;
        this.color = color;
        this.user = user;
    }

    public Long getIdNote() {
        return idNote;
    }

    public void setIdNote(Long idNote) {
        this.idNote = idNote;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public CurrentUserDto getUser() {
        return user;
    }

    public void setUser(CurrentUserDto user) {
        this.user = user;
    }
}
