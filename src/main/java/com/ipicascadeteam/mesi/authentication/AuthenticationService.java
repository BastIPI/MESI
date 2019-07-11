package com.ipicascadeteam.mesi.authentication;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.Instant;

import javax.validation.Valid;

import com.ipicascadeteam.mesi.user.User;
import com.ipicascadeteam.mesi.account.AccountDto;
import com.ipicascadeteam.mesi.user.UserRepository;
import com.ipicascadeteam.mesi.utils.RandomUtils;

@Service
@Transactional
public class AuthenticationService {

	@Autowired
    private PasswordEncoder passwordEncoder;
	
	@Autowired
    private UserRepository userRepository;
    
	public User register(@Valid AccountDto accountDto) {
		User user = new User();
		user.setUserName(accountDto.getUserName());
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
