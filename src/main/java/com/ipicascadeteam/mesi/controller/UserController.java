package com.ipicascadeteam.mesi.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ipicascadeteam.mesi.model.dto.UserDto;
import com.ipicascadeteam.mesi.service.UserService;

import java.util.*;

@RestController
@RequestMapping("/api")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * {@code GET /users} : get all users.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body all users.
     */
    @GetMapping("/users")
    public ResponseEntity<List<UserDto>> getAllUsers(Pageable pageable) {
        final Page<UserDto> page = userService.getAllUsers(pageable);
        // HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page);
        return new ResponseEntity<>(page.getContent(), HttpStatus.OK);
    }
    
}
