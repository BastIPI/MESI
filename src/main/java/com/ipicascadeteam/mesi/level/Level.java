package com.ipicascadeteam.mesi.level;

import com.ipicascadeteam.mesi.category.Category;
import com.ipicascadeteam.mesi.comment.Comment;
import com.ipicascadeteam.mesi.evaluation.Evaluation;
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
  private Set<LevelElement> levelElements;
  
  @Size(max = 512)
  @Column(name = "container_css_base", length = 512)
  private String containerCssBase;

  @Size(max = 512)
  @Column(name = "container_css_to_find", length = 512)
  private String containerCssToFind;

  @NotNull
  @Column(name = "date_created", nullable = false)
  private Instant dateCreated;

  @NotNull
  @Column(name = "date_edited", nullable = false)
  private Instant dateEdited;

  @OneToMany(mappedBy = "level", fetch=FetchType.EAGER)
  @OrderBy(value = "id ASC")
  private Set<Comment> comments;

  @JsonIgnore
  @OneToMany(mappedBy = "level")
  private Set<Evaluation> evaluations;

  @Column(name = "active", nullable = false)
  private Boolean active;

  @Column(name = "split", nullable = false)
  private Boolean split;

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

  public Set<LevelElement> getLevelElements() {
    return levelElements;
  }

  public void setLevelElements(Set<LevelElement> levelElements) {
    this.levelElements = levelElements;
  }

  public String getContainerCssBase() {
    return containerCssBase;
  }

  public void setContainerCssBase(String containerCssBase) {
    this.containerCssBase = containerCssBase;
  }

  public String getContainerCssToFind() {
    return containerCssToFind;
  }

  public void setContainerCssToFind(String containerCssToFind) {
    this.containerCssToFind = containerCssToFind;
  }

  public Boolean getActive() {
    return active;
  }

  public void setActive(Boolean active) {
    this.active = active;
  }

  public Boolean getSplit() {
    return split;
  }

  public void setSplit(Boolean split) {
    this.split = split;
  }
  
}
