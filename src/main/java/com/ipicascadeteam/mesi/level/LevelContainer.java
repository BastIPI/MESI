package com.ipicascadeteam.mesi.level;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.ipicascadeteam.mesi.level.LevelElement;
import com.ipicascadeteam.mesi.level.Level;

/**
 * Container
 */
@Entity
@Table(name = "level_container")
public class LevelContainer implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 1, max = 100)
    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn
    @NotNull
    private Level level;

    @NotNull
    @Size(min = 1, max = 512)
    @Column(name = "css_base", length = 512, nullable = false)
    private String cssBase;

    @NotNull
    @Size(min = 1, max = 512)
    @Column(name = "css_to_find", length = 512)
    private String cssToFind;

    @OneToMany(mappedBy = "levelContainer")
    private Set<LevelElement> levelElements;

}