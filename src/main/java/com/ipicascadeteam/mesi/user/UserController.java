package com.ipicascadeteam.mesi.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ipicascadeteam.mesi.user.UserDto;
import com.ipicascadeteam.mesi.user.UserService;

import java.util.*;

@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
    private UserService userService;

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
