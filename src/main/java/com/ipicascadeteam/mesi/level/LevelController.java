package com.ipicascadeteam.mesi.level;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class LevelController {

	@Autowired
    private LevelService levelService;

    @Autowired
    private LevelMapper levelMapper;

    /**
     * {@code GET /levels} : get all levels.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body all levels.
     */
    @GetMapping("/levels")
    public ResponseEntity<List<LevelDto>> getAllLevels() {
        return new ResponseEntity<>(levelMapper.levelsToLevelDtos(levelService.getAllLevels()), HttpStatus.OK);
    }

    @GetMapping("/levels/{id}")
    LevelDto getLevel(@PathVariable Long id) {
        return new LevelDto(levelService.findById(id));
    }

    @GetMapping("/levels/mechanics/{id}")
    LevelMechanic getLevelMechanic(@PathVariable Long id) {
        return new LevelMechanic(levelService.findById(id));
    }

    /**
     * {@code POST  /levels} : create a level.
     *
     * @param level : an object containing data from UI to create a level.
     * 
     */
    @PostMapping("/levels")
    @ResponseStatus(HttpStatus.CREATED)
    public Level create(@Valid @RequestBody Level level) {
        return levelService.save(level);
    }
    
}
