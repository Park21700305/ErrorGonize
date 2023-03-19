package io.errorgonize.qna.controller;

import io.errorgonize.qna.entity.Qna;
import io.errorgonize.qna.store.QnaStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class QnaController {
    @Autowired
    private QnaStore qnaStore;

    @PostMapping("/qna/newqna")
    public int CreateQ(@RequestBody Qna newQuestion) {
        qnaStore.createQ(newQuestion);
        return qnaStore.getQnaId();
    }

    @PostMapping("/qna")
    public int CreateA(@RequestBody Qna newAnswer) {
        qnaStore.createA(newAnswer);
        return qnaStore.getQnaId();
    }

    @PatchMapping("/qna/newqna")
    public void UpdateQ(@RequestBody Qna newQuestion) {
        qnaStore.updateQ(newQuestion);
    }

    @PatchMapping("/qna")
    public void UpdateA(@RequestBody Qna newAnswer) {
        qnaStore.updateA(newAnswer);
    }

    @DeleteMapping("/qna/{questionNo}")
    public void DeleteQ(@PathVariable int questionNo) {
        qnaStore.deleteQ(questionNo);
    }

    @DeleteMapping("/qna/{answerNo}")
    public void DeleteA(@PathVariable int questionNo, int answerNo) {
        qnaStore.deleteA(questionNo, answerNo);
    }

    @GetMapping("/qna/{questionNo}")
    public Qna Retrieve(@PathVariable int questionNo) {
        return qnaStore.retrieve(questionNo);
    }

    @GetMapping("/qna")
    public List<Qna> RetrieveAll() {
        return qnaStore.retrieveAll();
    }
}
