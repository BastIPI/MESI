package com.ipicascadeteam.mesi.level;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LevelElementRepository extends JpaRepository<LevelElement, Long> {

	Optional<LevelElement> findById(Long id);

    Page<LevelElement> findAll(Pageable pageable);

}

