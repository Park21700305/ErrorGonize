package io.errorgonize.user.store;

import io.errorgonize.user.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface UserStore {
    int create(User newUser);
    void update(User newUser);
    void delete(int id);

    User retrieve(int id);
    //List<User> retrieveAll();
}