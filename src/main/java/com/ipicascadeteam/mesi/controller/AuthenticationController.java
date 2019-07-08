package com.ipicascadeteam.mesi.controller;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.ipicascadeteam.mesi.model.User;
import com.ipicascadeteam.mesi.model.dto.AccountDto;
import com.ipicascadeteam.mesi.model.dto.UserDto;
import com.ipicascadeteam.mesi.service.AuthenticationService;
import com.ipicascadeteam.mesi.service.EmailService;

@RestController
@RequestMapping("/api")
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    private final EmailService emailService;
    
    public AuthenticationController(AuthenticationService authenticationService, EmailService emailService) {
        this.authenticationService = authenticationService;        
        this.emailService = emailService;        
    }

    /**
     * {@code POST  /register} : register the user.
     *
     * @param managedUserVM the managed user View Model.
     * @throws InvalidPasswordException {@code 400 (Bad Request)} if the password is incorrect.
     * @throws EmailAlreadyUsedException {@code 400 (Bad Request)} if the email is already used.
     * @throws LoginAlreadyUsedException {@code 400 (Bad Request)} if the login is already used.
     */
    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public void registerAccount(@Valid @RequestBody AccountDto accountDto) {
        User user = authenticationService.register(accountDto);
        //emailService.sendEmail(user.getEmail(), "Activation compte MESI", "Clé" + user.getActivationKey(), false, false);
    }
}
