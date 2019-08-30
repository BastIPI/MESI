package com.ipicascadeteam.mesi.comment;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ipicascadeteam.mesi.level.Level;
import com.ipicascadeteam.mesi.user.User;
import com.ipicascadeteam.mesi.user.UserDto;
import com.ipicascadeteam.mesi.user.UserMapper;

@Service
public class CommentMapper {

    @Autowired
    private UserMapper userMapper;


    public List<CommentDto> commentsToCommentDtos(List<Comment> comments) {
        return comments.stream()
            .filter(Objects::nonNull)
            .map(this::commentToCommentDto)
            .collect(Collectors.toList());
    }

    public CommentDto commentToCommentDto(Comment comment) {
        return new CommentDto(comment);
    }

    public Comment commentDtoToComment(CommentDto commentDto) {
        if (commentDto == null) {
            return null;
        } else {
            Comment comment = new Comment();
            comment.setId(commentDto.getId());
            comment.setUser(userMapper.userDtoToUser(commentDto.getUser()));
            if (commentDto.getLevelId() != null) {
                Level level = new Level();
                level.setId(commentDto.getLevelId());
                comment.setLevel(level);
            } else {
                comment.setLevel(null);
            }
            if (commentDto.getParentId() != null) {
                Comment parent = new Comment();
                parent.setId(commentDto.getParentId());
                comment.setParent(parent);
            } else {
                comment.setParent(null);
            }
            comment.setMessage(commentDto.getMessage());
            comment.setActive(commentDto.isActive());
            comment.setDateCreated(commentDto.getDateCreated());
            comment.setDateEdited(commentDto.getDateEdited());
            comment.setChildren(commentDto.getChildren());

            return comment;
        }
    }
}
