package com.ipicascadeteam.mesi.elementimage;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;

@Service
@Transactional
public class ElementImageService {

	@Autowired
    private ElementImageRepository elementImageRepository;
    
    @Transactional(readOnly = true)
    public List<ElementImage> getAllElementImages() {
        return elementImageRepository.findAll();
    }

	public ElementImage save(@Valid ElementImage elementImage) {
		elementImageRepository.save(elementImage);
		return elementImage;
	}

	public ElementImage findById(Long id) {
		return elementImageRepository.findById(id).get();
	}
}
