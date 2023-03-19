
package io.errorgonize.user.controller;


import io.errorgonize.user.entity.User;
import io.errorgonize.user.store.UserStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class UserController {
    @Autowired
    private UserStore userStore;

    @PostMapping("/user")
    public int register(@RequestBody User newUser){
        return userStore.create(newUser);
    }

    @GetMapping("/user/{id}")
    public User find(@PathVariable int id){
        return userStore.retrieve(id);
    }

//    @GetMapping("/users")
//    public List<User> findAll(){
//        return userStore.retrieveAll();
//    }

    @PutMapping("/user")
    public void modify(@RequestBody User newUser){
        userStore.update(newUser);
    }

    @DeleteMapping("/user/{id}")
    public void remove(@PathVariable int id){
        userStore.delete(id);
    }
}
