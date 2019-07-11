package com.ipicascadeteam.mesi.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
public class CommentController {

	@Autowired
    private CommentService commentService;

    /**
     * {@code GET /comments} : get all levels.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body all levels.
     */
    @GetMapping("/comments")
    public ResponseEntity<List<Comment>> getAllComments(Pageable pageable) {
        final Page<Comment> page = commentService.getAllComments(pageable);
        // HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page);
        return new ResponseEntity<>(page.getContent(), HttpStatus.OK);
    }
    
}
