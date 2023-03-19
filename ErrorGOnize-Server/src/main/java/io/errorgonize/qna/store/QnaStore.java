package io.errorgonize.qna.store;

import io.errorgonize.qna.entity.Qna;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
@Mapper
public interface QnaStore {
    void createQ(Qna newQuestion);
    void createA(Qna newAnswer);
    int getQnaId();
    void updateQ(Qna newQuestion);
    void updateA(Qna newAnswer);
    void deleteQ(int questionNo);
    void deleteA(int questionNo, int answerNo);
    Qna retrieve(int questionNo);
    List<Qna> retrieveAll();
}
