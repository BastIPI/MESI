package com.ipicascadeteam.mesi.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ipicascadeteam.mesi.model.User;
import com.ipicascadeteam.mesi.model.dto.UserDto;
import com.ipicascadeteam.mesi.repository.UserRepository;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    @Transactional(readOnly = true)
    public Page<UserDto> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable).map(UserDto::new);
    }

	public User registerUser(@Valid User user) {
		userRepository.save(user);
		return user;
	}

	public User findByUserName(String userName) {
		return userRepository.findByUserName(userName);
	}
}
