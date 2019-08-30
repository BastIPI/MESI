package com.ipicascadeteam.mesi.evaluation;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

@Service
@Transactional
public class EvaluationService {

	@Autowired
    private EvaluationRepository evaluationRepository;
    
    @Transactional(readOnly = true)
    public List<Evaluation> getAll() {
        return evaluationRepository.findAll();
    }

	public Evaluation save(Evaluation evaluation) {
		return evaluationRepository.save(evaluation);
	}
}
