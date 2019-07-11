package com.ipicascadeteam.mesi.authentication;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.ipicascadeteam.mesi.user.User;
import com.ipicascadeteam.mesi.user.UserDto;
import com.ipicascadeteam.mesi.user.UserMapper;
import com.ipicascadeteam.mesi.authentication.dto.AccountDto;
import com.ipicascadeteam.mesi.authentication.dto.LoginDto;
import com.ipicascadeteam.mesi.security.TokenProvider;
import com.ipicascadeteam.mesi.authentication.AuthenticationService;
import com.ipicascadeteam.mesi.user.UserService;

@RestController
@RequestMapping("/api")
public class AuthenticationController {

	@Autowired
    private AuthenticationManagerBuilder authenticationManagerBuilder;
    
	@Autowired
    private AuthenticationService authenticationService;
	
	@Autowired
    private UserService userService;
	
	@Autowired
    private UserMapper userMapper;
    
    /**
     * {@code POST  /register} : register the user.
     *
     * @param accountDto : an object containing data from UI to create a user.
     * 
     */
    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public void register(@Valid @RequestBody AccountDto accountDto) {
    	/*if (userService.findByLogin(accountDto.getLogin()) != null) {
    		
    	}*/
        User user = authenticationService.register(accountDto);
        //emailService.sendEmail(user.getEmail(), "Activation compte MESI", "Clé" + user.getActivationKey(), false, false);
    }

    /**
     * {@code POST  /login} : login
     *
     * @param accountDto : an object containing data from UI to login.
     * 
     */
    @PostMapping("/login")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<UserDto> login(@Valid @RequestBody LoginDto loginDto) {
    	System.out.println("Request to login : " + loginDto.getUserName());
    	
    	// Création du token et authentification
        UsernamePasswordAuthenticationToken authenticationToken =
            new UsernamePasswordAuthenticationToken(loginDto.getUserName(), loginDto.getPassword());
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        
        // Création du jwt et ajout à la réponse
        String jwt = TokenProvider.createJWT(authentication.getName(), "issuer", "subject", 84000000);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization", "Bearer " + jwt);
        
        // Récupération de l'utilisateur
        UserDto user = userMapper.userToUserDto(userService.findByUserName(loginDto.getUserName()));
        user.setToken(jwt);
        return new ResponseEntity<>(user, httpHeaders, HttpStatus.OK);
    }
}
