package com.ipicascadeteam.mesi.elementimage;

import com.ipicascadeteam.mesi.elementimage.ElementImage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ElementImageRepository extends JpaRepository<ElementImage, Long> {

	Optional<ElementImage> findById(Long id);

    Page<ElementImage> findAll(Pageable pageable);

}

