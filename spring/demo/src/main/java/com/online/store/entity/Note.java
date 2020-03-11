package com.online.store.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "note")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "note_id")
    private Long idNote;

    @Column(name = "note_title")
    private String title;

    @Column(name = "note_text")
    private String text;

    @ManyToOne
    @JoinColumn(name = "note_usr_id")
    private User user;

    @Column(name = "note_color")
    private String color;

    public Note() { }

    public Note(String title, String text, User user, String color) {
        this.title = title;
        this.text = text;
        this.user = user;
        this.color = color;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Note note = (Note) o;
        return idNote.equals(note.idNote) &&
                title.equals(note.title) &&
                text.equals(note.text) &&
                user.equals(note.user) &&
                color.equals(note.color);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idNote, title, text, user, color);
    }

    @Override
    public String toString() {
        return "Note{" +
                "idNote=" + idNote +
                ", title='" + title + '\'' +
                ", text='" + text + '\'' +
                ", user=" + user +
                ", color='" + color + '\'' +
                '}';
    }
}
