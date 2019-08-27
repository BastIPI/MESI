package com.ipicascadeteam.mesi.elementimage;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Service
@Transactional
public class ElementImageService {

	@Autowired
    private ElementImageRepository elementImageRepository;
    
    @Transactional(readOnly = true)
    public Page<ElementImage> getAllElementImages(Pageable pageable) {
        return elementImageRepository.findAll(pageable);
    }

	public ElementImage save(@Valid ElementImage elementImage) {
		elementImageRepository.save(elementImage);
		return elementImage;
	}

	public ElementImage findById(Long id) {
		return elementImageRepository.findById(id).get();
	}
}
