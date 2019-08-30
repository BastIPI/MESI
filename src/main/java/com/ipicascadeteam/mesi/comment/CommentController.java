package com.ipicascadeteam.mesi.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class CommentController {

	@Autowired
    private CommentService commentService;

    @PostMapping("/comments")
    @ResponseStatus(HttpStatus.CREATED)
    public CommentDto create(@Valid @RequestBody CommentDto commentDto) {
        return commentService.save(commentDto);
    }


}
