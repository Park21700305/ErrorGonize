package io.errorgonize.note.controller;

import io.errorgonize.note.entity.Note;
import io.errorgonize.note.store.NoteStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class NoteController {
    @Autowired
    private NoteStore noteStore;

    @PostMapping("/note")
    public int Create(@RequestBody Note newNote) {
        noteStore.create(newNote);
        return noteStore.getNoteId();
    }

    @PatchMapping("/note")
    public void Update(@RequestBody Note newNote) {
        noteStore.update(newNote);
    }

    @DeleteMapping("/note/{noteNo}")
    public void Delete(@PathVariable int noteNo) {
        noteStore.delete(noteNo);
    }

    @GetMapping("/note/{noteNo}")
    public Note Retrieve(@PathVariable int noteNo) {
        return noteStore.retrieve(noteNo);
    }

    @GetMapping("/note")
    public List<Note> RetrieveAll() {
        return noteStore.retrieveAll();
    }
}
