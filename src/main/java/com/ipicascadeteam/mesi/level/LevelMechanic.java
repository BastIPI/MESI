package com.ipicascadeteam.mesi.level;

import java.util.Set;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class LevelMechanic {


  public LevelMechanic(Level level) {
    this.id = level.getId();
    this.title = level.getTitle();
    this.description = level.getDescription();
    this.levelElements = level.getLevelElements();
    this.containerCssBase = level.getContainerCssBase();
    this.containerCssToFind = level.getContainerCssToFind();
    this.split = level.getSplit();
  }

  private Long id;

  @NotBlank
  @Size(min = 1, max = 100)
  private String title;

  @NotBlank
  @Size(min = 1, max = 255)
  private String description;

  private Set<LevelElement> levelElements;
  
  @Size(max = 512)
  private String containerCssBase;

  @Size(max = 512)
  private String containerCssToFind;

  @NotNull
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

  public Boolean getSplit() {
    return split;
  }

  public void setSplit(Boolean split) {
    this.split = split;
  }

  
}
