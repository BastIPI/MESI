package com.ipicascadeteam.mesi.level;

import com.ipicascadeteam.mesi.level.Level;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LevelRepository extends JpaRepository<Level, Long> {

	Optional<Level> findById(Long id);

    Page<Level> findAll(Pageable pageable);

}

