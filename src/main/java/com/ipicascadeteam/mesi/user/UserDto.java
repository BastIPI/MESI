package com.ipicascadeteam.mesi.user;

import com.ipicascadeteam.mesi.authority.Authority;
import com.ipicascadeteam.mesi.user.User;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import javax.validation.constraints.*;
import java.time.Instant;
import java.util.Set;
import java.util.stream.Collectors;

public class UserDto {

    public static final String LOGIN_REGEX = "^[_.@A-Za-z0-9-]*$";
    
    private Long id;

    @NotBlank
    @Pattern(regexp = LOGIN_REGEX)
    @Size(min = 1, max = 50)
    private String userName;

    @Size(max = 50)
    private String firstName;

    @Size(max = 50)
    private String lastName;

    @Email
    @Size(min = 5, max = 254)
    private String email;

    private boolean activated = false;

    private Instant createdDate;

    private String token;

    private Set<String> authorities;
    
    public UserDto() {
        // Empty constructor needed for Jackson.
    }

    public UserDto(User user) {
        this.id = user.getId();
        this.userName = user.getUserName();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.email = user.getEmail();
        this.activated = user.isActivated();
        this.createdDate = user.getCreatedDate();
        this.authorities = user.getAuthorities().stream()
                .map(Authority::getName)
                .collect(Collectors.toSet());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isActivated() {
        return activated;
    }

    public void setActivated(boolean activated) {
        this.activated = activated;
    }

    public Instant getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Instant createdDate) {
        this.createdDate = createdDate;
    }

    public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

    public Set<String> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Set<String> authorities) {
        this.authorities = authorities;
    }
    
	@Override
    public String toString() {
        return "UserDTO{" +
            "login='" + userName + '\'' +
            ", firstName='" + firstName + '\'' +
            ", lastName='" + lastName + '\'' +
            ", email='" + email + '\'' +
            ", activated=" + activated +
            ", createdDate=" + createdDate +
            ", authorities=" + authorities +
            "}";
    }
}
