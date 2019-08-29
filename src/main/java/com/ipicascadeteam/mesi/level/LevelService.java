package com.ipicascadeteam.mesi.level;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

import javax.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Service
@Transactional
public class LevelService {

    private final LevelRepository levelRepository;
    private final LevelElementRepository levelElementRepository;

    public LevelService(LevelRepository levelRepository, LevelElementRepository levelElementRepository) {
        this.levelRepository = levelRepository;
        this.levelElementRepository = levelElementRepository;
    }
    
    @Transactional(readOnly = true)
    public Page<Level> getAllLevels(Pageable pageable) {
        return levelRepository.findAll(pageable);
    }

	public Level save(Level level) {
        Set<LevelElement> levelElements = level.getLevelElements();
        levelRepository.save(level);
        for (LevelElement le : levelElements) {
            le.setLevel(level);
            levelElementRepository.save(le);
        }
		return level;
	}

	public Level findById(Long id) {
		return levelRepository.findById(id).get();
    }
}
