package com.ipicascadeteam.mesi.service.mapper;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ipicascadeteam.mesi.model.User;
import com.ipicascadeteam.mesi.model.dto.UserDto;

@Service
public class UserMapper {

    public List<UserDto> usersToUserDtos(List<User> users) {
        return users.stream()
            .filter(Objects::nonNull)
            .map(this::userToUserDto)
            .collect(Collectors.toList());
    }

    public UserDto userToUserDto(User user) {
        return new UserDto(user);
    }

    public List<User> userDTOsToUsers(List<UserDto> userDTOs) {
        return userDTOs.stream()
            .filter(Objects::nonNull)
            .map(this::userDtoToUser)
            .collect(Collectors.toList());
    }

    public User userDtoToUser(UserDto userDto) {
        if (userDto == null) {
            return null;
        } else {
            User user = new User();
            user.setId(userDto.getId());
            user.setUserName(userDto.getUserName());
            user.setFirstName(userDto.getFirstName());
            user.setLastName(userDto.getLastName());
            user.setEmail(userDto.getEmail());
            user.setActivated(userDto.isActivated());
            user.setCreatedDate(userDto.getCreatedDate());
            return user;
        }
    }

    public User userFromId(Long id) {
        if (id == null) {
            return null;
        }
        User user = new User();
        user.setId(id);
        return user;
    }
}
