package com.ipicascadeteam.mesi.comment;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Service
@Transactional
public class CommentService {

	@Autowired
    private CommentRepository commentRepository;
    
    @Transactional(readOnly = true)
    public Page<Comment> getAllComments(Pageable pageable) {
        return commentRepository.findAll(pageable);
    }

	public Comment save(@Valid Comment comment) {
		commentRepository.save(comment);
		return comment;
	}

	public Comment findById(Long id) {
		return commentRepository.findById(id).get();
	}
}
