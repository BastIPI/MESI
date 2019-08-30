package com.ipicascadeteam.mesi.evaluation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class EvaluationController {
    
    @Autowired
    private EvaluationService evaluationService;

    /**
     * {@code GET /evaluations} : get all evaluations.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body all levels.
     */
    @GetMapping("/evaluations")
    public List<Evaluation> getAll() {
        return evaluationService.getAll();
    }
    
    @PostMapping("/evaluations")
    @ResponseStatus(HttpStatus.CREATED)
    public Evaluation create(@Valid @RequestBody Evaluation evaluation) {
        return evaluationService.save(evaluation);
    }


}
