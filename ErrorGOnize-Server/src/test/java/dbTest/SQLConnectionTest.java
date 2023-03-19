package dbTest;

import org.junit.jupiter.api.Test;

import java.sql.Connection;
import java.sql.DriverManager;

public class SQLConnectionTest {
    private static final String URL = "jdbc:mysql://walab.handong.edu:3306/23_Camp3?allowPublicKeyRetrieval=true&useSSL=false";
    private static final String USER = "23_Camp3";
    private static final String PASSWORD = "RTdBYMBP978KUgYG";

    @Test
    public void testConnection() throws Exception {
        try {
            Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println(connection);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
