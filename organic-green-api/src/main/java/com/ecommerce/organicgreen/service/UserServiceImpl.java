package com.ecommerce.organicgreen.service;

import com.ecommerce.organicgreen.entity.UserEntity;
import com.ecommerce.organicgreen.model.User;
import com.ecommerce.organicgreen.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getAllUsers() {
        List<UserEntity> userEntities = userRepository.findAll();
        return userEntities
                .stream()
                .map(
                        usr -> new User(
                                usr.getId(),
                                usr.getName(),
                                usr.getEmail(),
                                usr.getAddress(),
                                usr.getCity(),
                                usr.getProvince(),
                                usr.getPostal(),
                                usr.getPhone(),
                                usr.getUserType(),
                                usr.getPassword()
                        ))
                .collect(Collectors.toList());
    }

    @Override
    public User createUser(User user) {
        UserEntity userEntity = new UserEntity();

        BeanUtils.copyProperties(user, userEntity);
        userRepository.save(userEntity);
        return user;

    }

    @Override
    public boolean deleteUser(Long id) {
        UserEntity user = userRepository.findById(id).get();
        userRepository.delete(user);
        return true;
    }

    @Override
    public User getUserById(Long id) {
        UserEntity userEntity = userRepository.findById(id).get();

        User user = new User();
        BeanUtils.copyProperties(userEntity, user);
        return user;
    }

    @Override
    public User updateUser(Long id, User user) {
        UserEntity userEntity = userRepository.findById(id).get();
        userEntity.setName(user.getName());
        userEntity.setUserType(user.getUserType());
        userEntity.setCity(user.getCity());
        userEntity.setEmail(user.getEmail());
        userEntity.setAddress(user.getAddress());
        userEntity.setPhone(user.getPhone());
        userEntity.setPostal(user.getPostal());
        userEntity.setProvince(user.getProvince());
        userEntity.setPassword(user.getPassword());

        userRepository.save(userEntity);

        return user;
    }

}
