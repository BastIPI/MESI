package com.ipicascadeteam.mesi.evaluation;

import com.ipicascadeteam.mesi.level.Level;
import com.ipicascadeteam.mesi.user.User;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.Instant;

@Entity
@Table(name = "evaluation")
public class Evaluation implements Serializable {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn
  @NotNull
  private User user;

  @ManyToOne
  @JoinColumn
  @NotNull
  private Level level;

  @NotNull
  @Column(name = "created_date", nullable = false)
  private Instant date;

  @NotNull
  @Column(name = "type", nullable = false)
  private Integer type;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Level getLevel() {
    return level;
  }

  public void setLevel(Level level) {
    this.level = level;
  }

  public Instant getDate() {
    return date;
  }

  public void setDate(Instant date) {
    this.date = date;
  }

  public Integer getType() {
    return type;
  }

  public void setType(Integer type) {
    this.type = type;
  }
}
