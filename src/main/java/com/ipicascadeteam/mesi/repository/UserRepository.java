package com.ipicascadeteam.mesi.repository;

import com.ipicascadeteam.mesi.model.User;

import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	User findByUserName(String userName);

    Page<User> findAll(Pageable pageable);
    
    List<User> findAllByActivatedIsFalse();

}

