package com.ipicascadeteam.mesi.comment;

import com.ipicascadeteam.mesi.user.UserDto;


import javax.validation.constraints.*;
import java.time.Instant;
import java.util.Set;

public class CommentDto {

    public static final String LOGIN_REGEX = "^[_.@A-Za-z0-9-]*$";
    
    private Long id;

    @NotNull
    private UserDto user;

    private Long levelId;

    @NotNull
    @Size(max = 255)
    private String message;

    private Long parentId;

    @NotNull
    private boolean active;

    @NotNull
    private Instant dateCreated;

    private Instant dateEdited;

    private Set<Comment> children;
    
    public CommentDto() {
        // Empty constructor needed for Jackson.
    }

    public CommentDto(Comment comment) {
        this.id = comment.getId();
        this.user = new UserDto(comment.getUser());
        this.levelId = (comment.getLevel() != null ? comment.getLevel().getId() : null);
        this.message = comment.getMessage();
        this.parentId = (comment.getParent() != null ? comment.getParent().getId() : null);
        this.active = comment.isActive();
        this.dateCreated = comment.getDateCreated();
        this.dateEdited = comment.getDateEdited();
        this.children = comment.getChildren();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }

    public Long getLevelId() {
        return levelId;
    }

    public void setLevelId(Long levelId) {
        this.levelId = levelId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Instant getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Instant dateCreated) {
        this.dateCreated = dateCreated;
    }

    public Instant getDateEdited() {
        return dateEdited;
    }

    public void setDateEdited(Instant dateEdited) {
        this.dateEdited = dateEdited;
    }

    public Set<Comment> getChildren() {
        return children;
    }

    public void setChildren(Set<Comment> children) {
        this.children = children;
    }

}
