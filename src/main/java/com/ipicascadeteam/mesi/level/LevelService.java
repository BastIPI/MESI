package com.ipicascadeteam.mesi.level;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import javax.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Service
@Transactional
public class LevelService {

    private final LevelRepository levelRepository;

    public LevelService(LevelRepository levelRepository) {
        this.levelRepository = levelRepository;
    }
    
    @Transactional(readOnly = true)
    public Page<Level> getAllLevels(Pageable pageable) {
        return levelRepository.findAll(pageable);
    }

	public Level save(@Valid Level level) {
		levelRepository.save(level);
		return level;
	}

	public Level findById(Long id) {
		return levelRepository.findById(id).get();
	}
}
