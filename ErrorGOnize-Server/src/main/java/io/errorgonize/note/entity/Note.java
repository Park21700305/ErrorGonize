package io.errorgonize.note.entity;

import com.google.gson.Gson;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class Note {
    private int noteNo;
    private String writerId;
    private String category;
    private boolean visible;
    private LocalDateTime regdate;
    private String noteTitle;
    private String noteContent;
    private String writer;
    private LocalDateTime moddate;
    private int likedCnt;
    private int viewCnt;

//    public Note(String category, boolean visible, String note_title, String note_content) {
//        this.category = category;
//        this.visible = visible;
//        this.note_title = note_title;
//        this.note_content = note_content;
//    }
//
//    public static Note sample() {
//        return new Note("java", true, "java error", "java error java error");
//    }
//
//    public static void main(String[] args) {
//        Note note = new Note("intellij", true, "intellij 초기 설정", "IntelliJ 설정하는 법 1. 2. 3. ");
//        System.out.println(new Gson().toJson(note));
//    }
}
