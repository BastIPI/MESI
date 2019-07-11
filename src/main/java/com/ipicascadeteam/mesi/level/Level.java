package com.ipicascadeteam.mesi.level;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name = "level")
public class Level implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
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
        if (!(o instanceof Level)) {
            return false;
        }
        return id != null && id.equals(((Level) o).id);
    }

    @Override
    public String toString() {
        return "Level{" +
            "id='" + id + '\'' +
            "}";
    }
}
