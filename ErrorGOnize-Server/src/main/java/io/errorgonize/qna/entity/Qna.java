package io.errorgonize.qna.entity;

import com.google.gson.Gson;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class Qna {
    private int questionNo;
    private int answerNo;
    private String writerQ;
    private String writerA;
    private String writerIdQ;
    private String writerIdA;
    private String questionTitle;
    private String questionContent;
    private String answerContent;
    private LocalDateTime regdateQ;
    private LocalDateTime regdateA;
    private LocalDateTime moddateQ;
    private LocalDateTime moddateA;
    private String category;
    private int answered;
    private int curious;
    private int viewCnt;
    private int clap;

//    public Qna(String question_title, String question_content, String answer_content,
//                String category) {
//        this.question_title = question_title;
//        this.question_content = question_content;
//        this.answer_content = answer_content;
//        this.category = category;
//    }
//
//    public static Qna sample() {
//        return new Qna("question_title(test)", "question_content(test)",
//                "answer_content(test)", "question_category(test)");
//    }
//
//    public static void main(String[] args) {
//        Qna qna = new Qna("question_title(test1)", "question_content(test1)",
//                "answer_content(test1)", "question_category(test1)");
//        System.out.println(new Gson().toJson(qna));
//    }
}
