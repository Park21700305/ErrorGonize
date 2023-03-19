package io.errorgonize.note.store;

import io.errorgonize.note.entity.Note;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface NoteStore {
    void create(Note newNote);
    int getNoteId();
    void update(Note newNote);
    void delete(int noteNo);

    Note retrieve(int noteNo);
    List<Note> retrieveAll();
}
