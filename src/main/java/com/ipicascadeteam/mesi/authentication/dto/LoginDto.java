package com.ipicascadeteam.mesi.authentication.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;


public class LoginDto {

    public static final String LOGIN_REGEX = "^[_.@A-Za-z0-9-]*$";
    
    @NotBlank
    @Pattern(regexp = LOGIN_REGEX)
    @Size(min = 1, max = 50)
    private String userName;
    
    @NotBlank
    @Size(min = 4, max = 100)
    private String password;
    
    private boolean rememberMe;

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

	public boolean isRememberMe() {
		return rememberMe;
	}

	public void setRememberMe(boolean rememberMe) {
		this.rememberMe = rememberMe;
	}

	@Override
    public String toString() {
        return "UserDTO{" +
            "login='" + userName + '\'' +
            "}";
    }
}
