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
import com.ipicascadeteam.mesi.account.AccountDto;
import com.ipicascadeteam.mesi.security.TokenProvider;
import com.ipicascadeteam.mesi.authentication.AuthenticationService;
import com.ipicascadeteam.mesi.utils.EmailService;
import com.ipicascadeteam.mesi.user.UserService;

@RestController
@RequestMapping("/api")
public class AuthenticationController {

	@Autowired
    private AuthenticationManagerBuilder authenticationManagerBuilder;
    
    private final AuthenticationService authenticationService;
    private final EmailService emailService;
    private final UserService userService;
    
    public AuthenticationController(AuthenticationService authenticationService, EmailService emailService, UserService userService) {
        this.authenticationService = authenticationService;        
        this.emailService = emailService;            
        this.userService = userService;    
    }

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
    public ResponseEntity<AccountDto> login(@Valid @RequestBody AccountDto accountDto) {
    	System.out.println("Request to login : " + accountDto.getUserName());
        UsernamePasswordAuthenticationToken authenticationToken =
            new UsernamePasswordAuthenticationToken(accountDto.getUserName(), accountDto.getPassword());

        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        //String jwt = tokenProvider.createToken(authentication, accountDto.isRememberMe());
        String jwt = TokenProvider.createJWT(authentication.getName(), "issuer", "subject", 84000000);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization", "Bearer " + jwt);
        accountDto.setToken(jwt);
        return new ResponseEntity<>(accountDto, httpHeaders, HttpStatus.OK);
    }
}
