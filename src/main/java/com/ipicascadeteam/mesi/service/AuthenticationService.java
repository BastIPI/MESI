package com.ipicascadeteam.mesi.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.Instant;
import java.time.LocalTime;

import javax.validation.Valid;

import com.ipicascadeteam.mesi.model.User;
import com.ipicascadeteam.mesi.model.dto.AccountDto;
import com.ipicascadeteam.mesi.model.dto.UserDto;
import com.ipicascadeteam.mesi.repository.UserRepository;
import com.ipicascadeteam.mesi.service.mapper.UserMapper;
import com.ipicascadeteam.mesi.utils.RandomUtils;

@Service
@Transactional
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthenticationService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    
	public User register(@Valid AccountDto accountDto) {
		User user = new User();
		user.setLogin(accountDto.getLogin());
		user.setFirstName(accountDto.getFirstName());
		user.setLastName(accountDto.getLastName());
		user.setEmail(accountDto.getEmail());
		user.setActivated(false);
		user.setCreatedDate(Instant.now());
		user.setActivationKey(RandomUtils.randomAlphaNumeric(20));
		
		user.setPassword(passwordEncoder.encode(accountDto.getPassword()));
		userRepository.save(user);
		return user;
	}
}
