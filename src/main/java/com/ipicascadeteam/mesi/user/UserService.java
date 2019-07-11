package com.ipicascadeteam.mesi.user;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ipicascadeteam.mesi.user.User;
import com.ipicascadeteam.mesi.user.UserDto;
import com.ipicascadeteam.mesi.user.UserRepository;

@Service
@Transactional
public class UserService {

	@Autowired
    private UserRepository userRepository;
    
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
