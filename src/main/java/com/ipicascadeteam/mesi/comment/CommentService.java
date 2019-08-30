package com.ipicascadeteam.mesi.comment;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Service
@Transactional
public class CommentService {

	@Autowired
	private CommentRepository commentRepository;
	
	@Autowired
    private CommentMapper commentMapper;

	public CommentDto save(CommentDto commentDto) {
		Comment comment = commentRepository.save(commentMapper.commentDtoToComment(commentDto));
		return new CommentDto(comment);
	}
}
