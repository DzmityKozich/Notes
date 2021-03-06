package com.online.store.repository;

import com.online.store.entity.Note;
import com.online.store.entity.User;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {
    List<Note> findAllByUser(User user, Sort sort);
    Note findByIdNote(Long id);
}
