package com.ipicascadeteam.mesi.level;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
public class LevelController {

	@Autowired
    private LevelService levelService;

    /**
     * {@code GET /levels} : get all levels.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body all levels.
     */
    @GetMapping("/levels")
    public ResponseEntity<List<Level>> getAllLevels(Pageable pageable) {
        final Page<Level> page = levelService.getAllLevels(pageable);
        // HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page);
        return new ResponseEntity<>(page.getContent(), HttpStatus.OK);
    }

    @GetMapping("/level/{id}")
    Level getLevel(@PathVariable Long id) {
        return levelService.findById(id);
    }
    
}
