package com.ipicascadeteam.mesi.category;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

@Service
@Transactional
public class CategoryService {

	@Autowired
    private CategoryRepository categoryRepository;
    
    @Transactional(readOnly = true)
    public List<Category> getAll() {
        return categoryRepository.findAll();
    }
}
