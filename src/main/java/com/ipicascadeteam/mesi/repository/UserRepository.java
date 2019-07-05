package com.ipicascadeteam.mesi.repository;

import com.ipicascadeteam.mesi.model.User;

import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findOneByLogin(String login);

    Page<User> findAll(Pageable pageable);
    
    List<User> findAllByActivatedIsFalse();

}

