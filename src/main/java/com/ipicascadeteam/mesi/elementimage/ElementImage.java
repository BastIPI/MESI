package com.ipicascadeteam.mesi.elementimage;

import java.io.Serializable;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "element_image")
public class ElementImage implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "name")
    private String name;

    @Lob
    @Column(name = "base")
    private byte[] base;

    @Column(name = "base_content_type")
    private String baseContentType;

    @Lob
    @Column(name = "result")
    private byte[] result;

    @Column(name = "result_content_type")
    private String resultContentType;

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

    public byte[] getBase() {
        return base;
    }

    public void setBase(byte[] base) {
        this.base = base;
    }

    public String getBaseContentType() {
        return baseContentType;
    }

    public void setBaseContentType(String baseContentType) {
        this.baseContentType = baseContentType;
    }

    public byte[] getResult() {
        return result;
    }

    public void setResult(byte[] result) {
        this.result = result;
    }

    public String getResultContentType() {
        return resultContentType;
    }

    public void setResultContentType(String resultContentType) {
        this.resultContentType = resultContentType;
    }
}
