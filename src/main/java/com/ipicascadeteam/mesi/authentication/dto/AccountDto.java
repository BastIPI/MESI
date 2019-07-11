package com.ipicascadeteam.mesi.authentication.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;


public class AccountDto {

    public static final String LOGIN_REGEX = "^[_.@A-Za-z0-9-]*$";
    
    @NotBlank
    @Pattern(regexp = LOGIN_REGEX)
    @Size(min = 1, max = 50)
    private String userName;
    
    @NotBlank
    @Size(min = 4, max = 100)
    private String password;

    @Size(max = 50)
    private String firstName;

    @Size(max = 50)
    private String lastName;

    @Email
    @Size(min = 5, max = 254)
    private String email;

    public String getUserName() {
        return userName;
    }

    public void setLogin(String userName) {
        this.userName = userName.toLowerCase();
    }

    public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	@Override
    public String toString() {
        return "UserDTO{" +
            "login='" + userName + '\'' +
            ", firstName='" + firstName + '\'' +
            ", lastName='" + lastName + '\'' +
            ", email='" + email + '\'' +
            "}";
    }
}
