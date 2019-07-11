package com.ipicascadeteam.mesi.comment;

import java.io.Serializable;
import java.time.Instant;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
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
    private Level level;

    @NotNull
    @Size(max = 255)
    @Column(name = "message", length = 255)
    private String message;

    @ManyToOne
    @JoinColumn
    private Comment parent;

    @NotNull
    @Column(nullable = false)
    private boolean active;

    @NotNull
    @Column(name = "created_date")
    private Instant createdDate;

    @Column(name = "edited_date")
    private Instant editedDate = null;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Comment)) {
            return false;
        }
        return id != null && id.equals(((Comment) o).id);
    }

    @Override
    public String toString() {
        return "Comment{" +
            "id='" + id + '\'' +
            "}";
    }
}
