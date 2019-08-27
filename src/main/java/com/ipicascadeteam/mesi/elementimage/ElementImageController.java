package com.ipicascadeteam.mesi.elementimage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.*;

@RestController
@RequestMapping("/api")
public class ElementImageController {

	@Autowired
    private ElementImageService elementImageService;

    /**
     * {@code GET /elementimages} : get all levels.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body all levels.
     */
    @GetMapping("/elementimages")
    public ResponseEntity<List<ElementImage>> getAllElementImages(Pageable pageable) {
        final Page<ElementImage> page = elementImageService.getAllElementImages(pageable);
        // HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page);
        return new ResponseEntity<>(page.getContent(), HttpStatus.OK);
    }

    /**
     * {@code POST  /elementimages} : Create a new elementImage.
     *
     * @param elementImage the elementImage to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new region, or with status {@code 400 (Bad Request)} if the region has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/elementimages")
    public ElementImage createElementImage(@RequestBody ElementImage elementImage) throws URISyntaxException {
        /*log.debug("REST request to save an elementImage : {}", elementImage);
        if (elementImage.getId() != null) {
            throw new BadRequestAlertException("A new region cannot already have an ID", ENTITY_NAME, "idexists");
        }*/
        ElementImage result = elementImageService.save(elementImage);
        return result;
    }
}
