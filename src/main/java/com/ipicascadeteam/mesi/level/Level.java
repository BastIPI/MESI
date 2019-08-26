package com.ipicascadeteam.mesi.level;

import com.ipicascadeteam.mesi.category.Category;
import com.ipicascadeteam.mesi.comment.Comment;
import com.ipicascadeteam.mesi.evaluation.Evaluation;
import com.ipicascadeteam.mesi.level.LevelContainer;
import com.ipicascadeteam.mesi.user.User;

import java.io.Serializable;
import java.time.Instant;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "level")
public class Level implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotNull
  @Size(min = 1, max = 100)
  @Column(name = "title", length = 100, nullable = false)
  private String title;

  @NotNull
  @Size(min = 1, max = 255)
  @Column(name = "description", length = 255, nullable = false)
  private String description;

  @ManyToOne
  @JoinColumn
  @NotNull
  private Category category;

  @ManyToOne
  @JoinColumn
  @NotNull
  private User user;

  @OneToMany(mappedBy = "level")
  private Set<LevelContainer> levelContainers;

  @NotNull
  @Column(name = "date_created", nullable = false)
  private Instant dateCreated;

  @NotNull
  @Column(name = "date_edited", nullable = false)
  private Instant dateEdited;

  @OneToMany(mappedBy = "level")
  private Set<Comment> comments;

  @JsonIgnore
  @OneToMany(mappedBy = "level")
  private Set<Evaluation> evaluations;

  @Transient
  private Long evaluationPos;

  @Transient
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

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Set<Comment> getComments() {
    return comments;
  }

  public void setComments(Set<Comment> comments) {
    this.comments = comments;
  }

  public Set<Evaluation> getEvaluations() {
    return evaluations;
  }

  public void setEvaluations(Set<Evaluation> evaluations) {
    this.evaluations = evaluations;
  }

  public Set<LevelContainer> getLevelContainers() {
    return levelContainers;
  }

  public void setLevelContainers(Set<LevelContainer> levelContainers) {
    this.levelContainers = levelContainers;
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

  @PostLoad
  public void calculateSumEvaluations(){
    this.evaluationPos = this.getEvaluations().stream().filter(eval -> eval.getType() == 1).count();
    this.evaluationNeg = this.getEvaluations().stream().filter(eval -> eval.getType() == 0).count();
  }
}
