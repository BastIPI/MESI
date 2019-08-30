package com.ipicascadeteam.mesi.level;

import java.io.Serializable;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ipicascadeteam.mesi.elementimage.ElementImage;

/**
 * LevelElement
 */
@Entity
@Table(name = "level_element")
public class LevelElement implements Serializable{

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
    @JsonIgnore
    private Level level;

    @Size(max = 512)
    @Column(name = "css_base", length = 512, nullable = false)
    private String cssBase;

    @Size(max = 512)
    @Column(name = "css_to_find", length = 512)
    private String cssToFind;

    @ManyToOne
    @JoinColumn
    private ElementImage elementImage;

    @Column(name = "text", length = 512)
    private String text;

    @Column(name = "order_id", nullable = false)
    private Long order;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCssBase() {
        return cssBase;
    }

    public void setCssBase(String cssBase) {
        this.cssBase = cssBase;
    }

    public String getCssToFind() {
        return cssToFind;
    }

    public void setCssToFind(String cssToFind) {
        this.cssToFind = cssToFind;
    }

    public Level getLevel() {
        return level;
    }

    public void setLevel(Level level) {
        this.level = level;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getOrder() {
        return order;
    }

    public void setOrder(Long order) {
        this.order = order;
    }

    public ElementImage getElementImage() {
        return elementImage;
    }

    public void setElementImage(ElementImage elementImage) {
        this.elementImage = elementImage;
    }
}