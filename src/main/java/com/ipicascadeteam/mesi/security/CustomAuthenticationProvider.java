package com.ipicascadeteam.mesi.security;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ipicascadeteam.mesi.user.User;
import com.ipicascadeteam.mesi.user.UserRepository;

@Service
public class CustomAuthenticationProvider implements AuthenticationProvider {

	@Autowired
	private UserRepository userRepository;

	@Autowired
    private PasswordEncoder passwordEncoder;
	
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		
		// Récupération des informations entrées par l'utilisateur
		String name = authentication.getName();
        Object credentials = authentication.getCredentials();
        
        // Si le mot de passe est bien une string on la cast
        if (!(credentials instanceof String)) {
            return null;
        }
        String password = credentials.toString();

        // Recherche de l'utilisateur correspondant
        User user = userRepository.findByUserName(name);

        // Exceptions selon la situation
        if (user == null) {
            throw new BadCredentialsException("1000");
        }
        if (!user.isActivated()) {
            throw new DisabledException("1001");
        }
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new BadCredentialsException("1000");
        }
        
        // Si tout est ok, on renvoie le token
        return new UsernamePasswordAuthenticationToken(name, password, new ArrayList<>());
	}

	@Override
	public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
	}
}
