package com.ipicascadeteam.mesi.comment;

import java.io.Serializable;
import java.time.Instant;
import java.util.List;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ipicascadeteam.mesi.level.Level;
import com.ipicascadeteam.mesi.user.User;

@Entity
@Table(name = "comment")
public class Comment implements Serializable {

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
    @JsonIgnore
    private Level level;

    @NotNull
    @Size(max = 255)
    @Column(name = "message", length = 255)
    private String message;

    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private Comment parent;

    @NotNull
    @Column(nullable = false)
    private boolean active;

    @NotNull
    @Column(name = "date_created")
    private Instant dateCreated;

    @Column(name = "date_edited")
    private Instant dateEdited = null;

    @OneToMany(mappedBy = "parent", fetch=FetchType.EAGER)
    private Set<Comment> children;

    @Override
    public String toString() {
        return "Comment{" +
            "id='" + id + '\'' +
            "}";
    }

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

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Comment getParent() {
        return parent;
    }

    public void setParent(Comment parent) {
        this.parent = parent;
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
}
