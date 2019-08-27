package com.ipicascadeteam.mesi.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
public class CategoryController {

	@Autowired
    private CategoryService categoryService;

    /**
     * {@code GET /categories} : get all categories.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body all levels.
     */
    @GetMapping("/categories")
    public List<Category> getAll() {
        return categoryService.getAll();
    }
    
}
