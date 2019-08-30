package com.ipicascadeteam.mesi.level;

import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.ipicascadeteam.mesi.category.Category;
import com.ipicascadeteam.mesi.comment.Comment;
import com.ipicascadeteam.mesi.comment.CommentDto;
import com.ipicascadeteam.mesi.user.UserDto;

public class LevelDto {

  public LevelDto(Level level) {
    this.id = level.getId();
    this.title = level.getTitle();
    this.description = level.getDescription();
    this.category = level.getCategory();
    this.user = new UserDto(level.getUser());
    this.dateCreated = level.getDateCreated();
    this.dateEdited = level.getDateEdited();
    this.comments = new HashSet<CommentDto>();
    for (Comment c : level.getComments()) {
      this.comments.add(new CommentDto(c));
    }
    this.evaluationPos = level.getEvaluations().stream().filter(eval -> eval.getType() == 1).count();
    this.evaluationNeg = level.getEvaluations().stream().filter(eval -> eval.getType() == 0).count();
  }

  private Long id;

  @NotBlank
  @Size(min = 1, max = 100)
  private String title;

  @NotBlank
  private String description;

  @NotNull
  private Category category;

  @NotNull
  private UserDto user;

  @NotNull
  private Instant dateCreated;

  @NotNull
  private Instant dateEdited;

  private Set<CommentDto> comments;

  private Long evaluationPos;

  private Long evaluationNeg;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Category getCategory() {
    return category;
  }

  public void setCategory(Category category) {
    this.category = category;
  }

  public UserDto getUser() {
    return user;
  }

  public void setUser(UserDto user) {
    this.user = user;
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

  public Set<CommentDto> getComments() {
    return comments;
  }

  public void setComments(Set<CommentDto> comments) {
    this.comments = comments;
  }

  public Long getEvaluationPos() {
    return evaluationPos;
  }

  public void setEvaluationPos(Long evaluationPos) {
    this.evaluationPos = evaluationPos;
  }

  public Long getEvaluationNeg() {
    return evaluationNeg;
  }

  public void setEvaluationNeg(Long evaluationNeg) {
    this.evaluationNeg = evaluationNeg;
  }

  
}
